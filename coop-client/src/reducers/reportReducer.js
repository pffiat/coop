// reducers/reportReducer.js

import {ADD_REPORT, LIST_REPORT} from '../actions/types';

export default function report(state = [], action) {
	switch (action.type) {
		case ADD_REPORT:
			return[...state, action.payload ];
		case LIST_REPORT:
			return[...state, ...action.reports ];
		default:
			return state;
	}
}