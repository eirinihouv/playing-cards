import { Action } from '../../libs';

export const newGame = Action('NEW_GAME');

export const dealCards = Action('DEAL_CARDS');
export const dealCardsSuccess = Action('DEAL_CARDS_SUCCESS');

export const selectCard = Action('SELECT_CARD');
export const deselectCard = Action('DESELECT_CARD');
export const deselectCardSuccess = Action('DESELECT_CARD_SUCCESS');

export const changeCards = Action('CHANGE_CARDS');
export const changeCardsSuccess = Action('CHANGE_CARDS_SUCCESS');
export const showCards = Action('SHOW_CARDS');

