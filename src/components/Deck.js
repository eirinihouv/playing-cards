import React from 'react';
import CardBack from './CardBack';

const Deck = ({ onDeckClick }) => (
  <ul className="deck">
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li className="pointer"><CardBack onClick={() => onDeckClick()} /></li>
  </ul>
);

export default Deck;