var grid;
var cell;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  cell = new Cell(20);
}

function draw () {
  background(250);


   grid.draw();
   cell.draw();

}


class Cell {
  constructor (column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
  }

  draw(){
    print("Hello World");
    fill(240);
    noStroke();
    rect(this.column * this.cellSize + 1, this.row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
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
      this.cells[column][row] = new Cell(column, row, cellSize)
      }
    }
    /* indicates the cells in the console */

    print(this.cells);

}

  draw () {

    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
      
        // fill(240);
        // noStroke();
        // rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }
}
