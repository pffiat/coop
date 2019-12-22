// reducers/productReducer.js

import {ADD_PRODUCT, LIST_PRODUCT} from '../actions/types';

export default function product(state = [], action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return[...state, action.payload ];
		case LIST_PRODUCT:
			return[...state, ...action.products ];
		default:
			return state;
	}
}