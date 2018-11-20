import React from 'react';
import Board from './components/Board';
import ResetGame from './components/ResetGame';
import './styles/game.css';
import './styles/cards.css';

const App = () => (
    <div className="playingCards simpleCards">
    <ResetGame />
    <Board />
  </div>
);

export default App;
