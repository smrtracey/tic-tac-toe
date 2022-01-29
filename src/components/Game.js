import {useState, useEffect} from 'react';
import GameBoard from './GameBoard';

const Game = () => {

// Create an array of 9 for each square and make them all null initially.
const [gameArray, setGameArray] = useState(new Array(9).fill(null));

//State for player's turn 
const[xTurn, setXTurn] = useState(true)
// State for the winner
const[winner, setWinner] = useState('None');

// Function to check if there is a winner
const checkForWinner =(squares)=>{
    // A 2D array that stores all the winning lines
    // There are only 8 possible win conditions.
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    
    // loop through the lines array and check if the content is the same in all of them, and not null.
    for(let i = 0;i< lines.length;i++){
        const [a,b,c] = lines[i];

        if(squares[a] && (squares[a] === squares[b]) && (squares[b] === squares[c])){
            changeWinner();
        }   
    }
  
    // If theres no winner.
    return null
}

const changeWinner = ()=>{
    if(xTurn){
        setWinner('O');
    }
    else{
        setWinner('X');
    }
}
// Function to update the game state after each square is clicked.
const updateGameArray =(index)=>{
    console.log('updating game array');
    const tempArray= [...gameArray];
    
    // Place X or O based on turn
    if(xTurn){
        tempArray[index] = 'X';
    }
    else{
        tempArray[index] = 'O';
    }
    
    setGameArray(tempArray);
    checkForWinner(gameArray);
    setXTurn(!xTurn);
}

// function to set all square content back to null and set the winner to None.
const resetGameArray = () =>{
    setGameArray(new Array(9).fill(null));
    setWinner('None');
    setXTurn(true);
}
// Any time the game Array is changed, check if theres a winner.
useEffect(()=>{
    checkForWinner(gameArray);
},[gameArray])

  return (
    <GameBoard
        gameArray = {gameArray}
        xTurn = {xTurn}
        updateGameArray = {updateGameArray}
        resetGameArray ={resetGameArray}
        winner = {winner}
    />
  )
};

export default Game;
