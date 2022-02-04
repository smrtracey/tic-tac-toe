import {useState, useEffect} from 'react';
import Start from './Start';
import GameBoard from './GameBoard';
import { Routes, Route } from 'react-router-dom';

const Game = () => {

    const[winner, setWinner] = useState(null);
    const[xWins, setXWins]= useState(0);
    const[oWins, setOWins] = useState(0);
    const[ties, setTies] = useState(0);
    const[mode, setMode] = useState('CPU');
    const changeMode = (value)=>{
        setMode(value);
    }

    const [marker, setMarker]= useState('X');
    const changeMarker = (value)=>{
        setMarker(value);

    }

    const [compTurn, setCompTurn] = useState(false);

    const [nextTurn, setNextTurn] = useState('X');

    const [turnCount, setTurnCount] = useState(0);

    const [gameState, setGameState] = useState(new Array(9).fill(null));
    const updateGameState = (index)=>{
        const tempState = [...gameState];
        tempState[index] = nextTurn;
        setGameState(tempState);
        setTurnCount(turnCount+1);
    }

    const compMove = ()=>{
    
        setTimeout(()=>{
            let foundSpace = false;
            while(!foundSpace){
                const randDigit = Math.floor(Math.random() * 9)-1;
                if(gameState[randDigit]===null){
                    updateGameState(randDigit);
                    foundSpace= true;
                }
            }
        }, 1000)
                
    }

    const checkForWinner =(squares)=>{
    
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
        
       
        for(let i = 0;i< lines.length;i++){
            const [a,b,c] = lines[i];
    
            if(squares[a] && (squares[a] === squares[b]) && (squares[b] === squares[c])){
                setWinner(squares[a]);
                return true;
            }
           
        }
        return false;
    }

    const resetGameState=()=>{
        setGameState(new Array(9).fill(null));
        setWinner(null);
        setNextTurn('X');
        if(compTurn){
            setCompTurn(false);
        }
    }

    useEffect(()=>{
            if(compTurn){
                compMove();
            }
        
    },[compTurn])

    //After each move, if there's no winner, keep playing.
    useEffect(()=>{
        if(!checkForWinner(gameState)){
            
            if(nextTurn ==='X') setNextTurn('O');
            else setNextTurn('X');
            if(mode =='CPU')
            {
                setCompTurn(!compTurn);
            }
        }
    },[gameState])


    useEffect(()=>{
        if(mode === 'CPU'){
            if(marker === 'X'){
                setCompTurn(false);
            }
            else{
                setCompTurn(true);
            }
        }
    },[marker])


    useEffect(()=>{
        if(winner === 'X'){
            setXWins(xWins+1)
        }
        else if (winner === 'O'){
            setOWins(oWins+1);
        }
    },[winner])

    // default.
    useEffect(()=>{
        setNextTurn('X')
        setCompTurn(false);
    },[])

    

  return (<>
  

    <Routes>
        <Route path = '/' element ={
            <Start 
            changeMode = {changeMode}
            marker ={marker}
            mode={mode}
            changeMarker= {changeMarker}
            />
        }
        />

        <Route path = '/game' element ={
            <GameBoard
            mode={mode}
            gameState = {gameState}
            updateGameState ={updateGameState}
            nextTurn = {nextTurn}
            xWins = {xWins}
            oWins = {oWins}
            ties ={ties}
            resetGameState={resetGameState}
            
           />}
        />

    </Routes>
    

    </>
  )
};

export default Game;

