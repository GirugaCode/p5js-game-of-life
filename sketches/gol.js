var grid;

function setup () {
  createCanvas(400, 400);
  grid = new Grid(20);
  grid.randomize();
}

function draw () {
  background(250);
   grid.draw();
   grid.updateNeighborCounts();
   grid.updatePopulation();


}


class Cell {
  constructor (column, row, size, liveNeighborCount) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
    this.liveNeighborCount = this.liveNeighborCount;
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

  liveOrDie () {
  if (this.isAlive == true){
    if (this.liveNeighborCount < 2 || this.liveNeighborCount > 3) {
      this.isAlive = false;
    }
  }   else{
      if (this.isAlive == false) {
        if (this.liveNeighborCount == 3) {
          this.isAlive = true;
        }
      }
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

  updateNeighborCounts () {
    
  for (var column = 0; column < this.numberOfColumns; column++) {
    for (var row = 0; row < this.numberOfRows; row++) {
      var currentCell = this.cells[column][row];
      currentCell.liveNeighborCount = 0;
      for (var xOffset = -1; xOffset <= 1; xOffset++) {
        var neighborX = currentCell.column + xOffset;
        if (neighborX < 0 || neighborX > this.numberOfColumns - 1){

        } else {
          for (var yOffset = -1; yOffset <= 1; yOffset++) {
              var neighborY = currentCell.row + yOffset
              if (neighborY < 0 || neighborY > this.numberOfRows - 1){

            } else {
              if (this.cells[neighborX][neighborY].isAlive == true && this.cells[neighborX][neighborY]!== currentCell) {
                currentCell.liveNeighborCount++;
              }
            }
          }
        }
      }
    }
  }
}


updatePopulation (){
  for (var column = 0; column < this.numberOfColumns; column ++) {
    for (var row = 0; row < this.numberOfRows; row++) {
      this.cells[column][row].liveOrDie();
    }
  }
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
