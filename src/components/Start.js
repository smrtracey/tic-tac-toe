import {useState} from 'react';
import { Link } from 'react-router-dom';

import '../styles/start.css'
const Start = ({marker, changeMarker, mode, changeMode}) => {

  return(
    <>
    <div className = 'choice-wrapper'>
        <h3>Player 1 plays as: </h3>
        <div className={`choice-slider ${marker === 'X'? 'x-choice': 'o-choice'}`}>

            <div className= {marker ==='X'? 'active': null} onClick= {() =>changeMarker('X')}>X</div>

            <div className= {marker ==='O' ? 'active': null} onClick= {() =>changeMarker('O')}>O</div>
        </div>
        <p>X goes first</p>
    </div>

    <div className={`new-pve ${mode ==='CPU'? 'selected': null}`} onClick={()=>changeMode('CPU')}>Player Vs CPU</div>
    <div className={`new-pvp ${mode ==='Player'? 'selected' : null}`} onClick={()=>changeMode('Player')}>Player Vs Player</div>
    

    <div className='btn-wrapper'>
        <Link to ='/game' className='link start-link'><button className='start-btn'>Start Game</button> </Link>
    </div>
    </>
    

  )
  }
export default Start;
