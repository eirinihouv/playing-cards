import React from 'react';
import _ from 'lodash';

import { PokerHandRate, RateableCards } from '../libs/poker';

const Hand = ({ cards }) => (
  <div>
    <ul className="table center">
        {cards.map(
            (card, index) => (
              <li key={index}>
                <a className={`card rank-${card.rank} ${card.suit}`} href="#">
                  <span className="rank">{card.rank}</span>
                  <span className="suit"></span>
                </a>
              </li>
            )
        )}
    </ul>
    <div>{PokerHandRate(new RateableCards(cards))}</div>
  </div>
);

export default Hand;