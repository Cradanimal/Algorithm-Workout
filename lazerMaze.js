

let maze = ['---/-','---/-','---/-','---/-'];
maze = maze.map(val => val.split(''));

const MazeRunner = function(grid) {

  this.grid = grid;
  this.visited = {};
  this.headed = "E";
  this.southEdge = grid.length;
  this.eastEdge = grid[0].length;

  this.modifiers = {
    "v" : this.southPrism,
    "<" : this.westPrism,
    ">" : this.eastPrism,
    "^" : this.northPrism,
    "/" : this.forwardMirror,
    "\\" : this.backMirror,
    "O" : this.mirror,
  };

  this.count = 0;
  this.current = [0, 0];
  this.done = false;
  this.findStart();
  this.runMaze();

};

MazeRunner.prototype.findStart = function() {

  let that = this;

  this.grid.forEach(function(row, i) {
    row.forEach(function(cell, j) {
      if (cell === "@") {
        that.current = [i, j];
      }
    });
  });
};

MazeRunner.prototype.southPrism = function() {

  this.headed = "S";

};

MazeRunner.prototype.northPrism = function() {

  this.headed = "N";

};

MazeRunner.prototype.eastPrism = function() {

  this.headed = "E";

};

MazeRunner.prototype.westPrism = function() {

  this.headed = "W";

};

MazeRunner.prototype.forwardMirror = function() {

  if (this.headed === "S") {
    this.headed = "W";
  } else if (this.headed === "N") {
    this.headed = "E";
  } else if (this.headed === "E") {
    this.headed = "N";
  } else {
    this.headed = "S";
  }
};

MazeRunner.prototype.backMirror = function() {

  if (this.headed === "S") {
    this.headed = "E";
  } else if (this.headed === "N") {
    this.headed = "W";
  } else if (this.headed === "E") {
    this.headed = "S";
  } else {
    this.headed = "N";
  }
};

MazeRunner.prototype.mirror = function() {

  if (this.headed === "S") {
    this.headed = "N";
  } else if (this.headed === "N") {
    this.headed = "S";
  } else if (this.headed === "E") {
    this.headed = "W";
  } else {
    this.headed = "E";
  }
};

MazeRunner.prototype.travel = function() {

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
};

MazeRunner.prototype.checkDone = function() {

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
};

MazeRunner.prototype.runMaze = function() {

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
};

let result = new MazeRunner(maze);
