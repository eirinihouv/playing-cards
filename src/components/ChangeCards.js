import React from 'react';
import { connect } from 'react-redux';
import { changeCards } from '../models/poker';

const ChangeCards = ({ selectedCards, onChangeCardsClick }) => (
  <button className="change" onClick={() => onChangeCardsClick(selectedCards)}>
    Change Cards
  </button>
);

const mapStateToProps = ({ selectedCards }) => ({
  selectedCards,
});

const mapDispatchToProps = dispatch => ({
  onChangeCardsClick: (selectedCards) => {
    console.log(selectedCards);
    dispatch(changeCards(selectedCards));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeCards);