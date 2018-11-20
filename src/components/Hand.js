import React from 'react';
import Cards from './Cards';
import HandRate from './HandRate';
import Player from './Player';

const Hand = ({ cards, type }) => (
  <div>
    <Player type={type} />
    <Cards cards={cards} />
    <HandRate cards={cards} />
  </div>
);

export default Hand;