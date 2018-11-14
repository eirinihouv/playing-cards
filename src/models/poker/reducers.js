//import { combineReducers } from 'redux';
import { Cards, CardsAndDeck } from '../../libs';
import { dealCards, resetGame } from './';

const game = {
  players: [],
  deck: Cards,
};

const playersAndDeck = (state = game, action) => {
  switch (action.type) {
    case dealCards.type:
      const cardsAndDeck = CardsAndDeck(state.deck, 5);
      return {...state, players: [...state.players, { cards: cardsAndDeck.cards }], deck: cardsAndDeck.deck};
    case resetGame.type:
      return {players: [], deck: Cards};
    default:
      return state;
  }
}; 

export default playersAndDeck;