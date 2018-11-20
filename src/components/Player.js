import React from 'react';

const Player = ({ type }) => (
  <div className="whiteColor">{ type === 'player' ? 'Player' : 'Opponent' }</div>
);

export default Player;