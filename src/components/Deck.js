import React from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../models/poker';
import CardBack from './CardBack';

const Deck = ({ onDeckClick }) => (
  <div className="deckDiv">
    <ul className="deck">
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li><CardBack /></li>
      <li className="pointer"><CardBack onClick={() => onDeckClick()} /></li>
    </ul>
  </div>  
);

const mapDispatchToProps = dispatch => ({
  onDeckClick: () => {
    dispatch(dealCards());
  }
});

export default connect(undefined, mapDispatchToProps)(Deck);