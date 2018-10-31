import { combineReducers } from 'redux';
import { appReducer } from './app';
import { fieldReducer } from './field';

export const rootReducer = combineReducers ({
    app: appReducer,
    field: fieldReducer
})
