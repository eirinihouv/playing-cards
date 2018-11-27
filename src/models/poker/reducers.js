import { combineReducers } from 'redux';
import { Cards, CardsAndDeck } from '../../libs';
import { dealCards, newGame, selectCard, deselectCard, changeCards, showCards } from './';

const playersAndDeckState = {
  player: {cards: [], type: 'player'},
  opponent: {cards: [], type: 'opponent'},
  deck: Cards,
};

const playersAndDeck = (state = playersAndDeckState, action) => {
  switch(action.type) {
    case dealCards.type:
      const playerCardsAndDeck = CardsAndDeck(state.deck, 5);
      const opponentCardsAndDeck = CardsAndDeck(playerCardsAndDeck.deck, 5);
      return {
        ...state, 
        player: {cards: playerCardsAndDeck.cards, type: 'player'}, 
        opponent: {cards: opponentCardsAndDeck.cards, type: 'opponent'},
        deck: opponentCardsAndDeck.deck,
      };
    case changeCards.type:
      const playerCards = state.player.cards.filter(elem => !action.payload.includes(elem));
      const newCardsAndDeck = CardsAndDeck(state.deck, action.payload.length);
      const newCards = [...playerCards, ...newCardsAndDeck.cards].sort((x, y) => x.weight - y.weight);
      return {
        ...state,
        player: { cards: newCards, type: 'player' },
        deck: newCardsAndDeck.deck,
      }
    case newGame.type:
      return {
        player: { cards:[], type: 'player' },
        opponent: { cards: [], type: 'opponent' },
        deck: Cards,
      };
    default:
      return state;
  }
};

const round = (round = 0, action) => {
  switch (action.type) {
    case dealCards.type:
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
    case deselectCard.type:
      return [
        ...selectedCards.slice(0, selectedCards.indexOf(action.payload)),
        ...selectedCards.slice(selectedCards.indexOf(action.payload) + 1)
      ];
    case changeCards.type:
      return [];
    case newGame.type:
      return [];
    default:
      return selectedCards;
  }
};

const poker = combineReducers({ playersAndDeck, round, selectedCards });

export default poker;