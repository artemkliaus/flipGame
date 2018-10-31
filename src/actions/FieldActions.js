import { SET_MOVES, SET_DISPLAY_MOVES, SET_CARDS_LIST, SET_FOUND_CARDS } from './constants';

export const setMoves = (moves) => ({
    type: SET_MOVES,
    payload: moves
});

export const setDisplayMoves = (displayMoves) => ({
    type: SET_DISPLAY_MOVES,
    payload: displayMoves
});

export const setCardsList = (cardsList) => ({
    type: SET_CARDS_LIST,
    payload: cardsList
});

export const setFoundCards = (foundCards) => ({
    type: SET_FOUND_CARDS,
    payload: foundCards
});
