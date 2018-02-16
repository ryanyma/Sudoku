'use strict';

function SudokuSolver() {
    var puzzleArray = [];
    
   /**
    * check if the value is a valid candidate by checking:
    * if it is unique within a row
    * if it is unique within a column
    * if it in unique within the 3 x 3 box
    * This method is always used in conjunction with isValidBoard to check the 
    * validity of every cell within the game board
    *
	* @param  {number} val the value the cell
	* @param  {number} row the row of the cell 
    * @param  {number} col the column of the cell
    * @return          true or false depending whether or not the cell is valid
	*/
	function isValidCell(val, row, col) {
		for (var i = 0; i < 9; i++) {
            // (1, 0, 0)
			var boxIndex = ((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(col / 3) * 3) + (i % 3);
			if (val == puzzleArray[(row * 9) + i] ||
				val == puzzleArray[col + (i * 9)] ||
				val == puzzleArray[boxIndex]) {
				return false;
			}
		}
		return true;
    }
    
   /**
    * Recursively test all numbers ranging from 1 - 9 for a given cell 
    * until the puzzle is solved
    * This method is called once starting at index 0, and it will recursively iterate
    * through the entire board. Once it has passed isValidCell(val, row, col) for 
    * every cell, the method returns true or false.
    *
	* @param  {number} cell the index of the cell
    * @return             true or false depending whether or not the the entire game board is valid
    */
	function isValidBoard(cell) {
		if (cell >= puzzleArray.length) {
			return true;
		} else if (puzzleArray[cell] != 0) {
			return isValidBoard(cell + 1);
		}

		for (var i = 1; i <= 9; i++) {
			if (isValidCell(i, Math.floor(cell / 9), cell % 9)) {
                puzzleArray[cell] = i;
				if (isValidBoard(cell + 1)) {
					return true;
				}
			}
        }
		puzzleArray[cell] = 0;
		return false;
    }
    
   /**
    * Recursively test all numbers ranging from 1 - 9 for a given cell 
    * until the puzzle is solved
    * This method uses isValidBoard(cell) to return whether or not the board is solvable.
    * It returns the appropriate alert message according to the value returned.
    *
    * @param  {number} puzzle the entire array of the game board
    * @param  {number} validate the option to validate the board
    * @return             true or false depending whether or not the the entire game board is solvable
    */
	this.solve = function(puzzle, validate) {
        //if the value is not a number then replace it with 0 
		puzzleArray = puzzle.split('').map(function (v) { 
            return isNaN(v) ? 0 : +v
        });
        if (puzzle.length !== 81) return 'Puzzle is not valid.'
        if (validate && !SOLVE) {
            return !isValidBoard(0) ? alert('Your current board is incorrect.') : alert('You got this. Keep trying!');
        } else if (validate && SOLVE) {
            return alert('You solved the board correctly. Congratulations!');
        } else {
            return !isValidBoard(0) ? alert('No solution found.') : (SOLVE = true, puzzleArray.join(''));
        }
    }
}