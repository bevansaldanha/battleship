import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Grid from './components/Grid';
import { GameBoard, Player, Ship } from './components/Game';

function App() {

  const playerBoard = new GameBoard('player');
  const compBoard = new GameBoard('comp');

  const [count, setCount] = useState(0);



  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <main>

          <Grid boards={playerBoard} />
          <Grid boards={compBoard} />

        </main>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
