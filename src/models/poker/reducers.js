import { combineReducers } from 'redux';
import { Cards } from '../../libs';
import { dealCardsSuccess, newGame, selectCard, deselectCardSuccess, changeCards, changeCardsSuccess, showCards } from './actions';

const playersAndDeckState = {
  player: {cards: [], type: 'player'},
  opponent: {cards: [], type: 'opponent'},
  deck: Cards,
};

const playersAndDeck = (state = playersAndDeckState, action) => {
  switch(action.type) {
    case dealCardsSuccess.type:
      return {
        ...state, 
        ...action.payload,
      };
    case changeCardsSuccess.type:
      return {
        ...state,
        ...action.payload,
      };
    case newGame.type:
      return {
        ...playersAndDeckState
      };
    default:
      return state;
  }
};

const round = (round = 0, action) => {
  switch (action.type) {
    case dealCardsSuccess.type:
      return 1;
    case changeCards.type:
      return 2;
    case showCards.type:
      return 3;
    case newGame.type:
      return 0;
    default:
      return round;
  }
};

const selectedCards = (selectedCards = [], action) => {
  switch (action.type) {
    case selectCard.type:
      return [...selectedCards, action.payload];
    case deselectCardSuccess.type:
      return [
        ...action.payload
      ];
    case changeCards.type:
      return [];
    case newGame.type:
      return [];
    default:
      return selectedCards;
  }
};

export const rootReducer = combineReducers({ playersAndDeck, round, selectedCards });