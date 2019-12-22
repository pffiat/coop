// reducers/clubReducer.js

import {ADD_CLUB, LIST_CLUB} from '../actions/types';

export default function club(state = [], action) {
	switch (action.type) {
		case ADD_CLUB:
			return[...state, action.payload ];
		case LIST_CLUB:
			return[...state, ...action.clubs ];
		default:
			return state;
	}
}