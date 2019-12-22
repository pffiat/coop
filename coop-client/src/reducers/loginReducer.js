// reducers/loginReducer.js


import { LOGIN } from '../actions/types';

export default function report(state = {}, action) {
	switch(action.type) {
		case LOGIN:
			return {...state, ...action.payload }  ;
		default:
			return state;
	}
}