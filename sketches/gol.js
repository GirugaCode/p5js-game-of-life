var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
}

function draw () {
  background(250);

   grid.draw();


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
    var cells = new Array(x);
    /* loop over each position in the array */
    /* create another array inside of the first array at the position 'i' */
    for (var i = 0; i < cells.length; i ++) {
      cells[i] = new Array(y); //
    }
    /* indicates the cells in the console */
    print (cells);
}

  draw () {
    for (var column = 0; column < this.numberOfColumns; column++) {
      for (var row = 0; row < this.numberOfRows; row++) {
        fill(240);
        noStroke();
        rect(column * this.cellSize + 1, row * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1);
      }
    }
  }

}
