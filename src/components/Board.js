import React from 'react';
import Deck from './Deck';
import Hand from './Hand';

const Board = () => (
  <div className="board center">
    <Hand />
    <Deck />
    <Hand />
  </div>
);

export default Board;