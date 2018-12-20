import React from 'react';
import Cards from './Cards';
import HandRate from './HandRate';
import Player from './Player';
import CardBackHand from './CardBackHand';
import ShowCards from './ShowCards';

const Hand = ({ cards, type, round }) => (
  <div className={type === 'player' ? 'player' : 'opponent'}>
    <Player type={type} />
    {type === 'opponent' ? round < 3 ? <CardBackHand /> : <Cards cards={cards} /> : <Cards cards={cards} /> }
    {type === 'player' ? <HandRate cards={cards} /> : round === 3 && <HandRate cards={cards} />} 
    {round === 2 && <ShowCards />}
  </div>
);

export default Hand;