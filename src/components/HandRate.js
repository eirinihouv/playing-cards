import React from 'react';
import { PokerHandRate, RateableCards } from '../libs';

const HandRate = ({ cards }) => (
  <div className="whiteColor">
    {cards.length !== 0 ? PokerHandRate(new RateableCards(cards)) : cards}
  </div>
);

export default HandRate;