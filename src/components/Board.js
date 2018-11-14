import React from 'react';
import Deck from './Deck';
import Hand from './Hand';

const Board = () => (
  <div className="board">
    <Deck />
    <Hand />
  </div>
);

export default Board;