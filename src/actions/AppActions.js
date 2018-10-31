import { SET_RESULT, SET_POPUP_VIEW } from './constants';

export const setPopupView = (popupView) => ({
    type: SET_POPUP_VIEW,
    payload: popupView
});

export const setResult = (result) => ({
    type: SET_RESULT,
    payload: result
});
