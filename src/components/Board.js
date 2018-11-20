import React from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../models/poker';
import Deck from './Deck';
import Hand from './Hand';
import ChangeCards from './ChangeCards';

const Board = ({ player, opponent, onDeckClick }) => (
  <div className="board">
    <Hand {...opponent} />
    <Deck onDeckClick={onDeckClick} />
    <Hand {...player} />
    <ChangeCards />
  </div>
);

const mapStateToProps = ({ playersAndDeck }) => ({
  player: playersAndDeck.player,
  opponent: playersAndDeck.opponent,
});

const mapDispatchToProps = dispatch => ({
  onDeckClick: () => {
    dispatch(dealCards());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);