
const Board = function(n) {
  this.board = [];
  for (let i = 0; i < n; i++) {
    this.board.push([]);
    for (let j = 0; j < n; j++) {
      this.board[i].push(0);
    }
  };

};

Board.prototype.toggleSquare = function(x, y) {
  this.board[x][y] = 1;
  console.log(this.board);
};