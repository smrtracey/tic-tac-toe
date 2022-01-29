import {useState, useEffect} from 'react';


import '../styles/square.css'
const Square = ({content, index, updateGameArray, winner}) => {

    
    const handleClick =()=>{
        // Only change if theres no winner and the square hasn't already been used.
    if(content === null && winner === 'None')
    {  
        updateGameArray(index);
    }
   
}


  return (
    <div className = 'square' onClick ={handleClick}>
        {content}
    </div>

  )
};

export default Square;
