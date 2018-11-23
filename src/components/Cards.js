import React from 'react';
import { connect } from 'react-redux';
import CheckBoxCard from './CheckBoxCard';
import Card from './Card';

const Cards = ({ cards, round }) => (
  <ul className="table">
    {cards.map(
      (card, index) => (
        <li key={index}>
          { (round !== 2 && round !== 3) ? <CheckBoxCard card={card} /> : <Card card={card} /> } 
        </li>
      )
    )}
  </ul>
);

const mapStateToProps = ({ round }) => ({ round });

export default connect(mapStateToProps)(Cards);