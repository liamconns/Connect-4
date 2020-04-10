
/*
    This is a visualization of the connect 4 board as an array to help me out

   (0,0)  (0,1)  (0,2)  (0,3)  (0,4)  (0,5)  (0,6)
   (1,0)  (1,1)  (1,2)  (1,3)  (1,4)  (1,5)  (1,6)
   (2,0)  (2,1)  (2,2)  (2,3)   2,4)  (2,5)  (2,6)
   (3,0)  (3,1)  (3,2)  (3,3)  (3,4)  (3,5)  (3,6)
   (4,0)  (4,1)  (4,2)  (4,3)  (4,4)  (4,5)  (4,6)
   (5,0)  (5,1)  (5,2)  (5,3)  (5,4)  (5,5)  (5,6)

*/

//variables that will be used throughout the program
var gameBeingPlayed = false;
var grid = []; //this will become a 2d array
var player_turn = 0; // intialized at 0 because it is not anyone's turn yet.


function play() {


    //this won't let the player hit the "New Game" button until the game is complete
    if (gameBeingPlayed == true) {

        alert("Please finish your current game before starting a new one!");

        return false;

    }

    gameBeingPlayed = true;


    for (let row = 0; row < 6; row++) {
        grid[row] = []; //create 2d array
        for(let col = 0; col < 7; col++) {
            grid[row][col] = 0; //initialize to 0
        }
    }

    add();
    player1_turn = 1; //player 1 turn

}

//This adds a piece to the board depending on
function add() {

    for (col = 0; col < 7; col++) {
        for (row = 0; row < 6; row++) {

            document.getElementById('cell_' + row + '_' + col).innerHTML = "<span class='piece player" + grid[row][col] + "'> </span>";
        
        }
    }

    checkWin(1);
    checkWin(2);

}

//this function checks if a given player has won the game
function checkWin(player) {

    //there are four ways to win at Connect four: horizontally, vertically, diagonal-up, and diagonal-down

    //horizontal
    for (col = 0; col < 4; col++) {
        for (row = 0; row < 6; row++) {

            if (grid[row][col] == player) {
                if ((grid[row][col + 1] == player) && (grid[row][col + 2] == player) && (grid[row][col + 3] == player)) {

                    if (player == 1) {
                        alert("Game Over! Red Wins!")
                    }

                    else {
                        alert("Game Over! Yellow Wins!")
                    }
                    gameBeingPlayed = false;
                    return true;
                }
            }
        }
    }

    //vertical
    for (col = 0; col < 7; col++) {
        for (row = 0; row < 3; row++) {

            if (grid[row][col] == player) {
                if ((grid[row+1][col] == player) && (grid[row+2][col] == player) && (grid[row+3][col] == player)) {

                    if (player == 1) {
                        alert("Game Over! Red Wins!")
                    }

                    else {
                        alert("Game Over! Yellow Wins!")
                    }
                    gameBeingPlayed = false;
                    return true;
                }
            }
        }
    }

    //diagonal up
    for (col = 0; col < 4; col++) {
        for (row = 3; row < 6; row++) {

            if (grid[row][col] == player) {
                if ((grid[row - 1][col + 1] == player) && (grid[row - 2][col + 2] == player) && (grid[row - 3][col + 3] == player)) {

                    if (player == 1) {
                        alert("Game Over! Red Wins!")
                    }

                    else {
                        alert("Game Over! Yellow Wins!")
                    }
                   
                    gameBeingPlayed = false;
                    return true;

                }
            }
        }
    }

    //diagonal down
    for (col = 0; col < 4; col++) {
        for (row = 0; row < 3; row++) {
            
            if (grid[row][col] == player) {
                if ((grid[row + 1][col + 1] == player) && (grid[row + 2][col + 2] == player) && (grid[row + 3][col + 3] == player)) {
                   
                    if (player == 1) {
                        alert("Game Over! Red Wins!")
                    }

                    else {
                        alert("Game Over! Yellow Wins!")
                    }

                    gameBeingPlayed = false;
                    return true;

                }
            }
        }
    }



}

//This function is called whenever the drop button is clicked
//It takes the column that the piece was dropped in and searches it for an available space
function drop(column) {

    if (gameBeingPlayed == false) {

        alert("The game is over! Start a new game!");

        return true;

    }

    //searches the column for "0" to make sure that there are spaces available
    for (row = 5; row >= 0; row--) {

        if (grid[row][column] == 0) {

            
            grid[row][column] = player_turn;
            add();

            //change turn
            if (player_turn == 1) {
                player_turn = 2;
            }

            else {
                player_turn = 1;
            }

            //stop searching for place to drop and exit the loop
            return true;

        }


    }


}
