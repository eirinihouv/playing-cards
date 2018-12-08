import React from 'react';
import { connect } from 'react-redux';
import { RateableCards } from '../libs';
import { selectCard, deselectCard } from '../models/poker';
import CheckBoxCard from './CheckBoxCard';
import Card from './Card';

const Cards = ({ cards, round, handleChecked, selectedCards }) => (
  <ul className="table">
    {cards.map(
      (card, index) => (
        <li key={index}>
          { (round !== 2 && round !== 3) ? 
            <CheckBoxCard 
              card={card} 
              handleChecked={() => handleChecked(cards, selectedCards, card)} 
            /> :
            <Card card={card} /> } 
        </li>
      )
    )}
  </ul>
);

const mapStateToProps = ({ round, selectedCards }) => ({ round, selectedCards });

const mapDispatchToProps = dispatch => ({
  handleChecked: (cards, selectedCards, card) => {
    if(selectedCards.includes(card)) {
      dispatch(deselectCard(card));
    } else {
      if(new RateableCards(cards).hasAce()) {
        if(selectedCards.length === 4) {
          return;
        }
      } else if(selectedCards.length === 3) {
        return;
      }
      dispatch(selectCard(card));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);