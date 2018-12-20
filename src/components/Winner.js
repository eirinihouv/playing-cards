import React from 'react';
import { connect } from 'react-redux';
import { Combo } from '../libs/poker';

const Winner = ({ player, opponent, round }) => (
  <div className="whiteColor winner">
    {round === 3 && ( 
      Combo(player.cards) > Combo(opponent.cards) ? 
        'Winner: Player' : 
        'Winner: Opponent')}
  </div>
);

const mapStateToProps = ({ playersAndDeck, round }) => ({
  player: playersAndDeck.player,
  opponent: playersAndDeck.opponent,
  round,
});

export default connect(mapStateToProps)(Winner);