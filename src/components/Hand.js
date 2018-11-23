import React from 'react';
import Cards from './Cards';
import HandRate from './HandRate';
import Player from './Player';
import CardBackHand from './CardBackHand';
import ShowCards from './ShowCards';

const Hand = ({ cards, type, round }) => (
  <div>
    <Player type={type} />
    {type === 'opponent' ? round < 3 ? <CardBackHand /> : <Cards cards={cards} /> : <Cards cards={cards} /> }
    <HandRate cards={cards} />
    {round === 2 && <ShowCards />}
  </div>
);

export default Hand;