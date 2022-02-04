import {useState, useEffect} from 'react';


import '../styles/square.css'
const Square = ({content, index, updateGameState,computersMove}) => {

    const handleClick =()=>{
        // Only change if theres no winner and the square hasn't already been used.       
          if(content === null)
          {  
              updateGameState(index);
          } 
}

  return (
    <div className = 'square' onClick ={!computersMove && handleClick}>
        {content}
    </div>

  )
};

export default Square;
