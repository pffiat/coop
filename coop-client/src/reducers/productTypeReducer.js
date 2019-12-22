// reducers/productTypeReducer.js


import {ADD_PRODUCT_TYPE, LIST_PRODUCT_TYPE} from '../actions/types';

export default function productType(state = [], action) {
	switch (action.type) {
		case ADD_PRODUCT_TYPE:
			return[...state, action.payload ];
		case LIST_PRODUCT_TYPE:
			return[...state, ...action.productTypes ];
		default:
			return state;
	}
}