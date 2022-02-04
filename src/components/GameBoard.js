import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';
import Endgame from './RoundEnd';

import '../styles/gameboard.css'


const GameBoard = ({gameState, updateGameState, mode, nextTurn, xWins, oWins, ties, resetGameState}) => {

   
    return (
    <>
    <div className='top-wrapper'>
        <div className='back-wrapper'>
            <Link to = '/' className = 'link'><button>Back</button></Link>
        </div>
        <div className='show-turn'>
            <p> Next Turn : {nextTurn}</p>
        </div>
        <div className='reset'>
            <button onClick = {resetGameState}>Reset</button>
        </div>
    </div>
    

    <div className = 'gameboard'>
       
        <div className='game-grid'>
            {
                gameState.map((square, i)=>{
                    return(
                        <Square key = {i} content ={square} index ={i} updateGameState ={updateGameState} mode = {mode} />
                    )
                })
            }
        </div>

        <div className='results-grid'>
            <div className='result x-wins'>
                X Wins: {xWins}
            </div>
            <div className='result ties'>
                Ties: {ties}
            </div>
            <div className='result y-wins'>
                O Wins: {oWins}
            </div>
        </div>
        
   
       </div>

       </> 
        
    
  )
};

export default GameBoard;
