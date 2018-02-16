var PUZZLE_LENGTH = 81;
var sudokuSolver = new SudokuSolver();

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

function solve() {
  var puzzleString = initPuzzle();
  console.log(puzzleString);
  var x = sudokuSolver.solve(puzzleString, 0);
  s = '';
  for (var z = 0; z < 81; ++z) {
    document.getElementById('cell' + z).value = x[z];
  }
}


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

  function validateBoard() {
    var puzzleString = initPuzzle();
    sudokuSolver.solve(puzzleString, 1);
  }

  function clearBoard() {
    SOLVE = false;
    for (var i = 0; i < PUZZLE_LENGTH; ++i) {
      if (document.getElementById('cell' + i).disabled === false) {
        document.getElementById('cell' + i).value = '';
      }
    }
  }