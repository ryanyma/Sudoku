'use strict';

function SudokuGenerate () {
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
  this.swapRow = function(row1, row2) {
    if (row1 != row2) {
      var temp = this.sudoku[row1];
      this.sudoku[row1] = this.sudoku[row2]
      this.sudoku[row2] = temp; 
    }
  }
  this.swapBigRow = function(bigRow1, bigRow2) {
    for (var i = 0; i < 3; i++) {
      this.swapRow(bigRow1 * 3 + i, bigRow2 * 3 + i);  
    }
  }
  this.swapBigCol = function(bigCol1, bigCol2) {
    for (var i = 0; i < 3; i++) {
      this.swapColumn(bigCol1 * 3 + i, bigCol2 * 3 + i);  
    } 
  }
  this.getRandomVal = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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