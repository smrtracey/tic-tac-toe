Simple Tic Tac Toe game. 

A useState hook holds the game array information
It defaults to an array of size 9 filled with null.

Clicking a square will update the array in the relative position and render the correct symbol in the grid, then change the turn.
After every turn, call the function to check for a winner.
When a winner is found, game stops until reset button is pressed.