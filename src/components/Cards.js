import React from 'react';
import Card from './Card';

const Cards = ({ cards }) => (
      <ul className="table">
        {cards.map(
          (card, index) => (
            <li key={index}>
              <Card card={card} />
            </li>
          )
        )}
      </ul>
);

export default Cards;