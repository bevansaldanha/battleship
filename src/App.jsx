import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Grid from './components/Grid';
import { GameBoard, Player, Ship } from './components/Game';
import Input from './components/Input';

function App() {

  const playerBoard = new GameBoard('player');
  const compBoard = new GameBoard('comp');
  const player = new Player()

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const playerName = (name) => {
    player.name = name;

  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <main>
          <Input name= {name} setName = {setName} player = {player} playerName = {playerName}/>
          {player.name&&<h1> Hi {player.name} </h1>}
          <Grid boards={playerBoard} />
          <Grid boards={compBoard} />

        </main>
        {name&&<div className ='names'>
        
          <p> {name}'s board </p> 
          <p> Computer's board </p> 

        
        </div>}

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  );
}
 
export default App;
