import { GET_SYMBOLS } from '../actions/types';

const initialState = {
	list: []
};

const list = (state = initialState, action) => {
	console.log('list from reducer:', action.payload);
	switch(action.type) {
		case GET_SYMBOLS:
			return {
				...state,
				list: action.payload
			};
		default:
			return state;
	}
};

export default list;
