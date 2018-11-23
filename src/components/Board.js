import React from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../models/poker';
import Deck from './Deck';
import Hand from './Hand';
import ChangeCards from './ChangeCards';
import Winner from './Winner';

const Board = ({ player, opponent, onDeckClick, round }) => (
  <div className="container board">
    { (round === 1 || round === 2 || round === 3) && <Hand {...opponent} round={round} /> }
    <Deck onDeckClick={onDeckClick} round={round} />
    <Winner />
    { (round === 1 || round === 2 || round === 3) && <Hand {...player} /> }
    { round === 1 && <ChangeCards /> }
    
  </div>
);

const mapStateToProps = ({ playersAndDeck, round }) => ({
  player: playersAndDeck.player,
  opponent: playersAndDeck.opponent,
  round,
});

const mapDispatchToProps = dispatch => ({
  onDeckClick: () => {
    dispatch(dealCards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);