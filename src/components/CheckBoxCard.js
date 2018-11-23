import React from 'react';
import { connect } from 'react-redux';
import { selectCard, deselectCard } from '../models/poker';

const CheckBoxCard = ({ card, handleChecked, selectedCards }) => {
  const rand = Math.floor(Math.random() * 10);
  return (
    <label htmlFor={card.weight + rand} className={`card rank-${card.rank} ${card.suit}`}>
      <span className="rank">{card.rank}</span>
      <span className="suit"></span>
      <input 
        type="checkbox" 
        id={card.weight + rand} 
        name={card.weight + rand} 
        onChange={() => handleChecked(selectedCards)} 
      />
    </label>
  );
};

const mapStateToProps = ({ selectedCards }) => ({
  selectedCards
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChecked: (selectedCards) => {
    if(selectedCards.includes(ownProps.card)) {
      dispatch(deselectCard(ownProps.card));
    } else {
      if(selectedCards.length === 3) {
        return;  
      }
      dispatch(selectCard(ownProps.card));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxCard);