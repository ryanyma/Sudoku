var PUZZLE_LENGTH = 81;
var sudokuSolver = new SudokuSolver();

/**
* Initializes a string numbers present on the game board 
*
* @return             the string of numbers present on the game board
*/
function initPuzzle() {
  var s = '';
  for (var i = 0; i < PUZZLE_LENGTH; ++i) {
    var y = document.getElementById('cell' + i).value;
    if (y >= 1 && y <= 9) {
      s += '' + y;
    } else {
      s += '.';
    }
  }
  return s;
}

/**
* Populates the game board with the values generated from the solve function in solver.js
*
* @return             populated game board
*/
function solve() {
  var puzzleString = initPuzzle();
  console.log(puzzleString);
  var x = sudokuSolver.solve(puzzleString, 0);
  s = '';
  for (var z = 0; z < 81; ++z) {
    document.getElementById('cell' + z).value = x[z];
  }
}

/**
* Initializes everything with a blank value and allows everything to be editable at first. 
* After, it populates the game board with the string passed in as the parameter and sets
* the "disabled" attribute to be true. This setting prevents the players from editing 
* the numbers that came from generating a valid Sodoku board.
*
* @param  {string} puzzle the string of numbers on the game board
* @return             populated game board
*/
function initCells(puzzle) {
    if (puzzle != null && puzzle.length >= PUZZLE_LENGTH) {
      for (var i = 0; i < PUZZLE_LENGTH; ++i) {
        document.getElementById('cell' + i).value = '';
        document.getElementById('cell' + i).removeAttribute("disabled");
      }
      for (var j = 0; j < PUZZLE_LENGTH; ++j) {
        if (puzzle.substr(j, 1) > 0 && puzzle.substr(j, 1) < 10) {
          document.getElementById('cell' + j).value = puzzle.substr(j, 1);
          document.getElementById('cell' + j).setAttribute("disabled", true);
        } 
      }
    }
  }
/**
* This method renders the board on the screen with a table, 9 different row sections, and 81 input fields.
*
* @return             table with row sections and input fields that hold the value of the hard coded Sodoku board
*/
  function drawBoard() {
    var s = '<table class="table">\n';

    for (var i = 0; i < 9; ++i) {
      s += '<tr>';
      for (var j = 0; j < 9; ++j) {
        var c = 'cell';
        if ((i + 1) % 3 == 0 && j % 3 == 0) {
          c = 'cell3';
        } else if ((i + 1) % 3 == 0) {
          c = 'cell1';
        } else if (j % 3 == 0) {
          c = 'cell2';
        }
        s += '<td class="' + c + '"><input class="input" onkeypress="return isNumberKey(event)" type="text" size="1" maxlength="1" id="cell' + (i * 9 + j) + '"></td>';
      }
      s += '</tr>\n';
    }
  
    s += '</table>';
    document.getElementById('9x9').innerHTML = s;
      initCells('009600103146039807500108006300251078005300902628900005987060031000812009201003084');
  }

/**
* This method calls initPuzzle() to return the string of current values present 
* on the game board. It then calls solve() in solver.js to check the validity of the board
*     
*/
  function validateBoard() {
    var puzzleString = initPuzzle();
    sudokuSolver.solve(puzzleString, 1);
  }
/**
* This method sets the SOLVE global variable to false since the board will be cleared.
* This method removes every cell that does not have the "disabled" attribute set to be true.
*
* @return             a game board with only generated values
*/
  function clearBoard() {
    SOLVE = false;
    for (var i = 0; i < PUZZLE_LENGTH; ++i) {
      if (document.getElementById('cell' + i).disabled === false) {
        document.getElementById('cell' + i).value = '';
      }
    }
  }