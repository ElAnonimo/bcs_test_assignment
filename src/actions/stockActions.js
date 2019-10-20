import {
	GET_SYMBOLS,
	GET_QUOTE,
	GET_ERROR
} from './types';

export const getSymbols = () => async dispatch => {
	try {
		const res = await fetch('https://cloud.iexapis.com/stable/ref-data/symbols?token=pk_45d58d928f874cf189f9f58885c425ce');
		const data = await res.json();
		console.log('data:', data.slice(0, 10));

		dispatch({
			type: GET_SYMBOLS,
			payload: data
		});
	} catch(ex) {
		dispatch({
			type: GET_ERROR,
			error: ex
		});
	}
};
