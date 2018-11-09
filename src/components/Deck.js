import React from 'react';
import { connect } from 'react-redux';
import CardBack from './CardBack';

import { PokerHandRate, RateableCards } from '../libs/poker';

const Deck = ({ getHand }) => (
  <ul className="deck">
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack /></li>
    <li><CardBack onClick={() => getHand()} /></li>
  </ul>
);

/*const mapStateToProps = ({ game }) => ({
  game
});*/

const mapDispatchToProps = (dispatch, getState) => ({
  getHand: () => {
    console.log('-------------------------');
    console.log(getState());
    console.log('-------------------------');
    console.log(dispatch({ type: 'DEAL_CARDS' }));
    console.log('-------------------------');
    console.log(getState());
    console.log('-------------------------');
    console.log(PokerHandRate(new RateableCards(getState().cards)));
  }
});

export default connect(undefined, mapDispatchToProps)(Deck);