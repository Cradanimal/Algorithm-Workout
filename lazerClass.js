let maze = ['@--','---','---'];
maze = maze.map(val => val.split(''));


// MazeRunner will be our parent class
// it will run a maze in the most simple possible way
// that is it finds start and then moves east until it reaches the edges
class MazeRunner {
  constructor (grid) {
    this.grid = grid;
    this.visited = {};
    this.headed = 'E';
    this.southEdge = grid.length;
    this.eastEdge = grid[0].length;

    this.modifiers = {};

    this.count = 0;
    this.current = [0,0];
    this.done = false;

  }

  // Define function to determine the point of start for the maze
  // and update this.current property
  findStart () {
    let that = this;
    this.grid.forEach(function(row, i) {
      row.forEach(function(cell, j) {
        if (cell === "@") {
          that.current = [i, j];
        }
      });
    });
  }

  // Translate the given direction into traversal of the matrix
  // also increment count prop to track steps
  travel () {
    this.count++;
    if (this.headed === "S") {
      this.current[0]++;
    } else if (this.headed === "N") {
      this.current[0]--;
    } else if (this.headed === "E") {
      this.current[1]++;
    } else {
      this.current[1]--;
    }
  }

  // Check if a current location inticates that the maze has been escaped
  // if so log the number of steps taken and end the process
  // also check if the maze is a loop and if so log '-1' and end the process
  checkDone () {
    if (this.current[0] < 0 || this.current[0] > this.southEdge - 1) {
      console.log(this.count);
      this.done = true;
    }
    if (this.current[1] < 0 || this.current[1] > this.eastEdge - 1) {
      console.log(this.count);
      this.done = true;
    }
    let check = "" + this.current.join("") + this.headed;
    if (this.visited[check] !== undefined) {
      console.log("-1");
      this.done = true;
    } else {
      this.visited[check] = true;
    }
  }

  // Maze running logic, calls findStart() and runs the maze
  runMaze () {
    this.findStart();
    while (!this.done) {
      let i = this.current[0];
      let j = this.current[1];
      let char = this.grid[i][j];
      if (this.modifiers[char]) {
        this.modifiers[char].call(this);
      }
      this.travel(); 
      this.checkDone();
    }
    return;
  }

}


// We create a new class that has logic to deal with additional obstacles
// in order to be able to extend the functionality of our modifiers prop
// we have to make a call to our parent class with the required inputs
class PrismMazeRunner extends MazeRunner {
  constructor (grid) {
    super(grid);
    this.modifiers['>'] = this.eastPrism;
    this.modifiers['<'] = this.westPrism;
    this.modifiers['^'] = this.northPrism;
    this.modifiers['v'] = this.southPrism;
  }

  southPrism () {
    this.headed = "S";
  }

  northPrism () {
    this.headed = "N";
  }

  eastPrism () {
    this.headed = "E";
  }

  westPrism () {
    this.headed = "W";
  }
};

class MirrorMazeRunner extends PrismMazeRunner {
  constructor (grid) {
    super(grid);
    this.modifiers["/"] = this.forwardMirror;
    this.modifiers["\\"] = this.backMirror;
    this.modifiers["O"] = this.mirror;
  }
  forwardMirror () {
    if (this.headed === "S") {
      this.headed = "W";
    } else if (this.headed === "N") {
      this.headed = "E";
    } else if (this.headed === "E") {
      this.headed = "N";
    } else {
      this.headed = "S";
    }
  }

  backMirror () {
    if (this.headed === "S") {
      this.headed = "E";
    } else if (this.headed === "N") {
      this.headed = "W";
    } else if (this.headed === "E") {
      this.headed = "S";
    } else {
      this.headed = "N";
    }
  }

  mirror () {
    if (this.headed === "S") {
      this.headed = "N";
    } else if (this.headed === "N") {
      this.headed = "S";
    } else if (this.headed === "E") {
      this.headed = "W";
    } else {
      this.headed = "E";
    }
  }
}



var run = new MirrorMazeRunner(maze);
run.runMaze();
