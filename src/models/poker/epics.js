import { ofType, combineEpics } from 'redux-observable';
import { map } from 'rxjs/operators';
import { CardsAndDeck } from '../../libs';
import { dealCards, dealCardsSuccess, deselectCard, deselectCardSuccess, changeCards, changeCardsSuccess } from './actions';

const dealCardsEpic = (action$, state$) => action$.pipe(
  ofType(dealCards.type),
  map(() => {
    const playerCardsAndDeck = CardsAndDeck(state$.value.playersAndDeck.deck, 5);
    const opponentCardsAndDeck = CardsAndDeck(playerCardsAndDeck.deck, 5);
    return dealCardsSuccess({ 
      player: {cards: playerCardsAndDeck.cards, type: 'player'}, 
      opponent: {cards: opponentCardsAndDeck.cards, type: 'opponent'},
      deck: opponentCardsAndDeck.deck,
    });
  }),
);

const changeCardsEpic = (action$, state$) => action$.pipe(
  ofType(changeCards.type),
  map(({ payload: selectedCards }) => {
    const playerCards = state$.value.playersAndDeck.player.cards.filter(elem => !selectedCards.includes(elem));
    const newCardsAndDeck = CardsAndDeck(state$.value.playersAndDeck.deck, selectedCards.length);
    const newCards = [...playerCards, ...newCardsAndDeck.cards].sort((x, y) => x.weight - y.weight);
    return changeCardsSuccess({
      player: { cards: newCards, type: 'player' },
      deck: newCardsAndDeck.deck,
    });
  }),
);

const deselectCardEpic = (action$, state$) => action$.pipe(
  ofType(deselectCard.type),
  map(({ payload: card }) => deselectCardSuccess([
        ...state$.value.selectedCards.slice(0, state$.value.selectedCards.indexOf(card)),
        ...state$.value.selectedCards.slice(state$.value.selectedCards.indexOf(card) + 1)
    ])
  ),
);

export const rootEpic = combineEpics(dealCardsEpic, changeCardsEpic, deselectCardEpic);