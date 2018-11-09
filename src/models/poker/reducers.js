//import { combineReducers } from 'redux';
import { Cards, CardsAndDeck } from '../../libs/poker';

const game = (game = {cards: [], deck: Cards}, action) => {
  switch (action.type) {
    case 'DEAL_CARDS':
      return CardsAndDeck(game.deck, 5);
    default:
      return game;
  }
}; 

export default game;