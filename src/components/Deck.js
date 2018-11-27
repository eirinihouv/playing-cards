import React from 'react';
import CardBack from './CardBack';

const Deck = ({ onDeckClick, round }) => (
  <ul className="deck">
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    <CardBack />
    { round === 0 ? <li className="pointer"><a href="#" className="card back" onClick={() => onDeckClick()}></a></li> : <CardBack  /> }
  </ul>
);

export default Deck;