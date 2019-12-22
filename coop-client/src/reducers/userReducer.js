// reducers/userReducer.js


import {ADD_USER, LIST_USER} from '../actions/types';

export default function report(state = [], action) {
	switch (action.type) {
		case ADD_USER:
			return[...state, action.payload ];
		case LIST_USER:
			return[...state, ...action.users ];
		default:
			return state;
	}
}