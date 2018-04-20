var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
}

function draw () {
  background(250);


   grid.draw();


}


class Cell {
  constructor (column, row, size, value) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;

  }

  draw() {
    if (this.isAlive == false) {
      fill(240);
    } else {
      fill(200,0,200);
    }
    noStroke();
    rect(this.column * this.size + 1, this.row * this.size + 1, this.size - 1, this.size - 1);
  }

  setIsAlive (value) {

    if (value == true) {
        this.isAlive = true;
    }
    else if (value == false){
        this.isAlive = false;
    }
  }
}
class Grid {
  constructor (cellSize) {

    /* indentifys the cell size */
    this.cellSize = cellSize;
    /*calculates the width of the columns while keeping the constant resolution of the cell size */
    this.numberOfColumns = width / cellSize;
    /* calculates the height of the columns while keeping the constant resolution of the cell size */
    this.numberOfRows =  height / cellSize;





    /* how big the first array should be */
    var x = this.numberOfColumns;
    /* how big each array inside of the first array should be */
    var y = this.numberOfRows;
    /* create the initial array */
    this.cells = new Array(x);
    /* loop over each position in the array */
    /* create another array inside of the first array at the position 'i' */
    for (var i = 0; i < this.cells.length; i ++) {
      this.cells[i] = new Array(y); //
    }

    for (var column = 0; column < this.numberOfColumns; column ++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
        }
    }
    /* indicates the cells in the console */
    print(this.cells);
  }

  draw () {

    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var cell = this.cells[column][row];
        cell.draw();
      }
    }
  }

  randomize(){

    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        var cell = this.cells[column][row];
        cell.setIsAlive(floor(random(2)));
      }
    }
  }
}





// // nested ifs
// if (alive){
//
//   // check if 2 neighbors
// }
// else {
//
//   // check if 3 neighbors
//   if
// }
//
// //complex ifs
//
// if (alive && count) {
//
//
// } else if (alive && count...)
