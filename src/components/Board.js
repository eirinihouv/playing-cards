import React from 'react';
import { connect } from 'react-redux';
import Deck from './Deck';
import Hand from './Hand';

const Board = ({ players }) => (
  <div className="board center">
    <Deck />
    {players.map(
      (player, index) =>
        <Hand cards={player.cards} key={index} />
    )}
  </div>
);

const mapStateToProps = ({ players }) => ({
  players
});

export default connect(mapStateToProps)(Board);