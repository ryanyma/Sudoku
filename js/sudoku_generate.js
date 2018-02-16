'use strict';

function SudokuGenerate () {
/**
* This method sets the SOLVE global variable back to false since a new board will be
* generated. It takes a preset Sudoku board and performs a sequence of transformation
* operations to randomize the board. The sequence is randomized with the randomized 
* function. After the sequence has finished, cells are randomly removed to generate
* a valid Sudoku board with a unique solution.
*
* @param  {number} cellEmptyInput number of cells that want to be removed 
* @return             valid Sudoku board
*/
  this.generate = function(cellEmptyInput) {
    SOLVE = false;
    this.sudokuTemplate();

    for (var i = 0; i < this.getRandomVal(1, 9); i++) {
        this.swapBigCol(this.getRandomVal(0, 2), this.getRandomVal(0, 2));
    }

    for (var i = 0; i < this.getRandomVal(1, 9); i++) {
      this.swapBigRow(this.getRandomVal(0, 2), this.getRandomVal(0, 2));
    }

    for (var i = 0; i < this.getRandomVal(3, 27); i++) {
        var scalar = this.getRandomVal(0, 2);
        this.swapColumn(this.getRandomVal(0, 2) + 3 * scalar, this.getRandomVal(0, 2) + 3 * scalar);
    }

    for (var i = 0; i < this.getRandomVal(3, 27); i++) {
      var scalar = this.getRandomVal(0, 2);
      this.swapRow(this.getRandomVal(0, 2) + 3 * scalar, this.getRandomVal(0, 2) + 3 * scalar);
    }

    this.removeCells(cellEmptyInput);

    var newArr = [];
    for(var i = 0; i < this.sudoku.length; i++) {
        newArr = newArr.concat(this.sudoku[i]);
    }

    return newArr.join("");
  }

/**
* Sets this.sudoku to a hard coded valid Sudoku board that will be used for Sudoku generation.
*
* @return             solved, valid Sudoku board
*/
  this.sudokuTemplate = function() {
    this.sudoku = [
      [9, 6, 4, 7, 1, 8, 3, 5, 2],
      [1, 3, 5, 2, 6, 4, 7, 8, 9],
      [2, 7, 8, 3, 5, 9, 4, 1, 6],
      [5, 1, 2, 6, 4, 3, 8, 9, 7],
      [8, 4, 3, 9, 7, 5, 6, 2, 1],
      [6, 9, 7, 1, 8, 2, 5, 4, 3],
      [4, 2, 9, 8, 3, 6, 1, 7, 5],
      [7, 8, 6, 5, 2, 1, 9, 3, 4],
      [3, 5, 1, 4, 9, 7, 2, 6, 8]
    ]
  }

/**
* Swaps the two columns passed in the parameter
*
* @param  {number} col1 one column of the game board
* @param  {number} col2 another column of the game board
* @return             a new game board with swapped columns
*/
  this.swapColumn = function(col1, col2) {
    if (col1 != col2) {
      var temp;
      for (var i = 0; i < 9; i++) {
        temp = this.sudoku[i][col1];
        this.sudoku[i][col1] = this.sudoku[i][col2];
        this.sudoku[i][col2] = temp;
      }
    }
  }
/**
* Swaps the two rows passed in the parameter
*
* @param  {number} row1 one row of the game board
* @param  {number} row2 another row of the game board
* @return             a new game board with swapped rows
*/
  this.swapRow = function(row1, row2) {
    if (row1 != row2) {
      var temp = this.sudoku[row1];
      this.sudoku[row1] = this.sudoku[row2]
      this.sudoku[row2] = temp; 
    }
  }
  
/**
* Swaps the two big rows passed in the parameter
*
* @param  {number} bigRow1 the entire row that has the same length of 3 x 3 box and same width as entire board
* @param  {number} bigRow2 another entire row that has the same length of 3 x 3 box and same width as entire board
* @return             a new game board with swapped columns
*/
  this.swapBigRow = function(bigRow1, bigRow2) {
    for (var i = 0; i < 3; i++) {
      this.swapRow(bigRow1 * 3 + i, bigRow2 * 3 + i);  
    }
  }

/**
* Swaps the two bog columns passed in the parameter
*
* @param  {number} bigCol1 the entire column that has the same length as the entire board and same width as the 3 x 3 box
* @param  {number} bigCol2 another column row that has the same length as the entire board and same width as the 3 x 3 box
* @return             a new game board with swapped columns
*/
  this.swapBigCol = function(bigCol1, bigCol2) {
    for (var i = 0; i < 3; i++) {
      this.swapColumn(bigCol1 * 3 + i, bigCol2 * 3 + i);  
    } 
  }

/**
* Generates random value
*
* @param  {number} min the lower bound of the range 
* @param  {number} max the upper bound of the range
* @return             a random number within the range of numbers
*/

  this.getRandomVal = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/**
* This method is called to remove cells from the generated Sudoku board.
* To randomize the function, the random function is called to randomize the cells being 
* removed
*
* @param  {number} count the number of cells that are to be removedf
* @return             finalized Sudoku board
*/
  this.removeCells = function(count) {
    var counter = 0;
    var x, y;
    while(counter < count) {
      x = this.getRandomVal(0, 8);
      y = this.getRandomVal(0, 8);
      if (this.sudoku[x][y]) {
        this.sudoku[x][y] = 0;
        counter++;
      }
    }
  }
}

window.sudokuGenerate = new SudokuGenerate();