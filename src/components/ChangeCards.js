import React from 'react';
import { connect } from 'react-redux';
import { changeCards } from '../models/poker';

const ChangeCards = ({ selectedCards, onChangeCardsClick, round }) => (
  <button 
    className="change" 
    onClick={() => onChangeCardsClick(selectedCards)} >
    Change Cards
  </button>
);

const mapStateToProps = ({ selectedCards, round }) => ({
  selectedCards,
  round,
});

const mapDispatchToProps = dispatch => ({
  onChangeCardsClick: (selectedCards) => {
    dispatch(changeCards(selectedCards));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCards);