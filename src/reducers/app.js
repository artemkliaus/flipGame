import { SET_RESULT,
         SET_POPUP_VIEW
} from '../actions/constants';

const initialState = {
    result: null,
    popupView: 'start'
};

export const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_POPUP_VIEW:
            return { ...state, popupView: action.payload };
        case SET_RESULT:
            return { ...state, result: action.payload };
        default:
            return state;
    }
}
