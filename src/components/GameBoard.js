import Square from './Square';

import '../styles/gameboard.css'


const GameBoard = ({xTurn, gameArray, updateGameArray, resetGameArray, winner}) => {

    const handleReset =()=>{
        resetGameArray();
    }

    return (
    <div className = 'gameBoard'>
       <h1>Tic Tac Toe</h1>
       <div className='next-player-display'>
           <h2> Next Player : </h2>
           <span>{xTurn? 'X' : 'O'}</span>
       </div>
       <div className='winner-display'>
        <h2> Winner: </h2>
        <span>{winner}</span>
       </div>

       <button className='reset-btn' onClick={()=>handleReset()}>Reset</button> 


       <div className=' square-grid'>
           {/* Loop over the GameArray and create a square for every element in it */}
        {
            gameArray.map((square, i)=>{
                return(
                    <Square key = {i} content ={square} index ={i} updateGameArray = {updateGameArray} winner = {winner}/>
                )
            })
        }
   
       </div>
        
    </div>
  )
};

export default GameBoard;
