import React from 'react';
import { connect } from 'react-redux';
import { showCards } from '../models/poker';

const ShowCards = ({ onShowCardsClick }) => (
  <button className="show" onClick={() => onShowCardsClick()}>
    Show Cards
  </button>
);

const mapDispatchToProps = dispatch => ({
  onShowCardsClick: () => {
    dispatch(showCards());
  }
});

export default connect(undefined, mapDispatchToProps)(ShowCards);