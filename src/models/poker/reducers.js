//import { combineReducers } from 'redux';
import { dealCards } from './actions';
import { Cards, CardsAndDeck } from '../../libs/poker';

const game = {
  players: [],
  deck: Cards,
};

const playersAndDeck = (state = game, action) => {
  switch (action.type) {
    case dealCards.type:
      const cardsAndDeck = CardsAndDeck(state.deck, 5);
      return {...state, players: [...state.players, { cards: cardsAndDeck.cards }], deck: cardsAndDeck.deck}
    default:
      return state;
  }
}; 

export default playersAndDeck;