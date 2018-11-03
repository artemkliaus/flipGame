//Images
import artuhov from '../img/s_artuhov.jpeg';
import azarov from '../img/s_azarov.jpeg';
import burkov from '../img/s_burkov.jpeg';
import civilev from '../img/s_civilev.jpeg';
import moor from '../img/s_moor.jpeg';
import nikitin from '../img/s_nikitin.jpeg';
import nikolaev from '../img/s_nikolaev.jpeg';
import nosov from '../img/s_nosov.jpeg';

import { SET_MOVES,
         SET_DISPLAY_MOVES,
         SET_CARDS_LIST,
         SET_FOUND_CARDS,
         SET_PREV_CARD
} from '../actions/constants';

const initialState = {
    cardSymbols: [
        {src: artuhov, id: 0},
        {src: azarov, id: 1},
        {src: burkov, id: 2},
        {src: civilev, id: 3},
        {src: moor, id: 4},
        {src: nikitin, id: 5},
        {src: nikolaev, id: 6},
        {src: nosov, id: 7}
    ],
    moves: 0,
    displayMoves: 0,
    cardsList: null,
    prevCard: null,
    foundCards: 0
};

export const fieldReducer = ( state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MOVES:
            return {...state, moves: action.payload};
        case SET_DISPLAY_MOVES:
            return {...state, displayMoves: action.payload};
        case SET_CARDS_LIST:
            return {...state, cardsList: action.payload};
        case SET_FOUND_CARDS:
            return {...state, foundCards: action.payload};
        case SET_PREV_CARD:
            return {...state, prevCard: action.payload};
        default:
            return state;
    }
}
