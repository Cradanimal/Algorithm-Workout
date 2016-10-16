(function( $ ) {


  function Minesweeper ( selector, cols, rows ) {

    const self = this;
    this.table = $( selector );
    this.cols = ( cols || 10 );
    this.rows = ( rows || 10 );
    this.bombs = Math.floor( cols * rows * .1);

    this.table.click(
      function (event) {
        self.onClick(event);

        return (false);
        }
      );

    this.initTable();

  };

  Minesweeper.prototype.buildTable = function() {

    const rowHtml = ("<tr>" + $.repeatString( "<td class=\"active\">&nbsp;</td>", this.cols ) + "</tr>" );

    const tableHtml = $.repeatString( rowHtml, this.rows );

    this.table.html( tableHtml );
  };

  Minesweeper.prototype.checkEndGame = function() {

    let message = "";
    let isEndGame = false;

    if ( this.bombCells.filter( ".bombed" ).size() ) {

      message = "You lose! Play again?";

      isEndGame = true;

    } else if (!this.nonBombCells.filter( ".active" ).size() ) {

      message = "You Win! Play again?"

      isEndGame = true;
    }

    if ( isEndGame ) {
      if ( confirm(message) ) {

        this.restart();
      }
    }


  };

  Minesweeper.prototype.clearTable = function() {

    this.table.empty();
  };

  Minesweeper.prototype.initTable = function() {

    let self = this;
    console.log(this.table);
    this.clearTable();

    this.buildTable();

    this.cells = this.table.find( "td" );

    this.cells.data( "nearBombs", 0 );

    this.cells.each(function( index, cellNode ) {
      let cell = $( this );

      cell.data( "near", cell.near() );
    });

    this.bombCells = this.cells
      .randomFilter( this.bombs )
      .addClass( "bomb" );


    this.nonBombCells = this.cells.filter(function( index ) {

      return ( self.bombCells.index( this ) === -1 );
    }); 

    this.bombCells.each(function( index, node ) {
      let cell = $( this );

      let nearCells = cell.data( "near" );

      nearCells.each(function() {
        let nearCell = $( this );

        nearCell.data( "nearBombs", (nearCell.data( "nearBombs") + 1) );
      });
    });

  };

  Minesweeper.prototype.onClick = function( event ) {

    let target = $( event.target );

    if ( !target.is( "td.active" ) ) {

      return ;
    }

    if ( event.altKey ) {

      this.toggleCaution( target );

    } else {

      if ( target.is( ".bomb" ) ) {

        this.revealBoard();

      } else {

        this.revealCell( target );

      }

      this.checkEndGame();
    }
  };

  Minesweeper.prototype.restart = function() {

    this.initTable();

  };

  Minesweeper.prototype.revealBoard = function() {

    this.cells
      removeClass( "active" )
      removeClass( "caution" );

    this.bombCells.addClass( "bombed" );

    this.cells.each(function( index, cellNode ) {

      let cell = $( this );

      if ( cell.is( "bomb" ) ) {

        cell.html( "*" );

      } else if ( cell.data( "nearBombs" ) ) {

        cell.html(cell.data( "nearBombs" ));
      }
    });
  };


  Minesweeper.prototype.revealCell = function( cell ) {

    let self = this;

    cell
      .removeClass( "active" )
      .removeClass( "caution" );

    if ( cell.data( "nearBombs" ) ) {

      cell.html( cell.data( "nearBombs" ));

    } else {

      cell.html( "&nbsp" );

      cell.data( "near" )
        .filter( ".active" )
          .each(function( index, cellNode ) {

            self.revealCell( $( this ));

          });
    }
  };

  Minesweeper.prototype.toggleCaution = ( cell ) => {

    if ( cell.is( "caution" ) ) {

      cell.removeClass( "caution" );

      cell.html( "&nbsp" );

    } else {

      cell.addClass( "caution" );

      cell.html( "?" );

    }
  };

  window.Minesweeper = Minesweeper;


})( jQuery );