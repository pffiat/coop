// actions/actionsProductType.js

import { ADD_PRODUCT_TYPE, LIST_PRODUCT_TYPE } from './types';

import axios from 'axios';
import { history } from '../utils/history';
import { apiUrl } from '../utils/constants';
import getAuthHeader from '../utils/auth';


const apiUrlProductType = apiUrl + "product_types";

export const createProductType = ({     
        name,
        reference,
        brand,
        capacity,
        detail}) => {
	return (dispatch) => {
		return axios.post(apiUrlProductType, {     
        name,
        reference,
        brand,
        capacity,
        detail}, getAuthHeader( ))
			.then(response => {
				dispatch(createProductTypeSuccess(response.data));
				history.push('/productTypes/'+ response.data.id);
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createProductTypeSuccess = (data) => {
	return {
		type: ADD_PRODUCT_TYPE,
		payload: {  
			data
		}
	}
};

export const listProductType = () => {
	return (dispatch) => {
		return axios.get(apiUrlProductType, getAuthHeader() )
			.then(response => {
				dispatch(listProductTypeSuccess(response.data))
			})
			.catch(error => {
				console.log('can not get productTypes');
				throw(error);
			});
	};
};

export const listProductTypeSuccess = (productTypes) => {
	return {
		type: LIST_PRODUCT_TYPE,
		productTypes
	}
};