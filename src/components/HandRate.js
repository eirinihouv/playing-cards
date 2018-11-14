import React from 'react';
import { PokerHandRate, RateableCards } from '../libs';

const HandRate = ({ cards }) => (
  <div>
    {PokerHandRate(new RateableCards(cards))}
  </div>
);

export default HandRate;