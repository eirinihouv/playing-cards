import React from 'react';
import { connect } from 'react-redux';
import { dealCards } from '../models/poker/actions';
import CardBack from './CardBack';

const Deck = ({ onDeckClick }) => (
  <ul className="deck">
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
);

const mapDispatchToProps = dispatch => ({
  onDeckClick: () => {
    dispatch(dealCards());
  }
});

export default connect(undefined, mapDispatchToProps)(Deck);