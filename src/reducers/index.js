import { combineReducers } from 'redux';
import list from './list';
import error from './error';

export const rootReducer = combineReducers({
	list,
	error
});
