// actions/actionsProduct.js


import { ADD_PRODUCT, LIST_PRODUCT } from './types';

import axios from 'axios';
import { history } from '../utils/history';
import { apiUrl } from '../utils/constants';
import getAuthHeader from '../utils/auth';


const apiUrlProduct = apiUrl + "products";

export const createProduct = ({ 
		entryDate,
        reference,
        product_type,
        condition,
        detail}) => {
	return (dispatch) => {
		return axios.post(apiUrlProduct, { 
		entryDate, 
        reference,
        productType : {id: product_type},
        productCondition : condition,
        detail}, getAuthHeader( ))
			.then(response => {
				dispatch(createProductSuccess(response.data));
				history.push('/products/'+ response.data.id);
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createProductSuccess = (data) => {
	return {
		type: ADD_PRODUCT,
		payload: {  
			data
		}
	}
};

export const listProduct = () => {
	return (dispatch) => {
		return axios.get(apiUrlProduct, getAuthHeader() )
			.then(response => {
				dispatch(listProductSuccess(response.data))
			})
			.catch(error => {
				console.log('can not get products');
				throw(error);
			});
	};
};

export const listProductSuccess = (products) => {
	return {
		type: LIST_PRODUCT,
		products
	}
};