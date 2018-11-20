import { Action } from '../../libs';

export const dealCards = Action('DEAL_CARDS');
export const newGame = Action('NEW_GAME');
export const checked = Action('CHECKED');
export const selectCard = Action('SELECT_CARD');
export const deselectCard = Action('DESELECT_CARD');
export const changeCards = Action('CHANGE_CARDS');
//export const checkCard = (isChecked, card) => isChecked ? deselectCard(card) : selectCard(card)