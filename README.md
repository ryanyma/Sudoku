# Sudoku
A simple Sudoku implementation using HTML, CSS, and Javascript.

# Application Design
Break down the design of this application into "language" components: HTML, CSS, and Javascript.

# HTML
On the markup front, the application uses table elements. This decision is made because they are visually and semantically the closest to the structure of an actual sudoku game board.

This board is represented by row groups and standard cells. The row groups correspond to each row of the 9 x 9 game board. The standard cells refer to the individual cells of the game board. 

Additionally, for each cell, an input field is embedded so the users can type a number ranging from 1 to 9. 

# CSS
For the styling of the app, I went with a simplistic aesthetic for two main reasons. The first reason was the time constraint. I didn't have the time to develop lots of fancy designs and images/icons to integrate into the application (plus, the current trend of flat, minimalism fit well). Secondly, I felt a lighter, simpler style reflected the leisurely nature of the game.

The core file is style.css which contains all the styles pertaining to the web application including the game board, buttons, and background image.

# JavaScript
The core of the application. Inside solver.js, you'll find functions that solve / validate the game board. The solve function that is needed to be called from outside the file is exported by creating an instance of the SudokuSolver. The solve function recursively tests all possible numbers for a given cell until the puzzle is solved. 

Inside board.js, you'll find functions that render the game board and support the functionality of the buttons. 

Inside sudoku_generate, you'll find functions that generate valid Sudoku game boards. Instead of using a backtracking algorithm, I start with a completed Sudoku board and perform a sequence of transformation operations. The generator would swap any row of the 3 x 3 blocks with any other row. The columns of the 3 x 3 blocks are swapped with any other column. The single rows and columns are also swapped. This sequence of operations is randomized with a random number generator to ensure the closest we can get to true randomness. After the sequence has been applied to the game board, individual cells are then removed for the players to solve. 

When the app is first loaded, drawBoard() is called: it renders the game board, the input grid, and prepopulates the game board with hardcoded values. The player has the option to validate the puzzle at any time to have his / her progress checked. The validate function shares the same helper functions as the solve function as validating the board checks if the numbers inputted are correct so far. Alerts are triggered when the player has the correct or the incorrect board. The solve function completes the current board if there is a valid solution. The clear button clears everything that the user has inputted so far. The reset button generates a random valid Sudoku board. 
