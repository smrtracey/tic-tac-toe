import {useState} from 'react'
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Game from './components/Game'
import Start from './components/Start'



function App() {

  return (
    <div className="App">
      <Header/>
      <Game/>
    </div>
  );
}

export default App;
