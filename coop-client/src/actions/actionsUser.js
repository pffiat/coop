// actions/actionsUser.js

import { ADD_USER, LIST_USER } from './types';

import axios from 'axios';
import { history } from '../utils/history';
import { apiUrl } from '../utils/constants';
import getAuthHeader from '../utils/auth';


const apiUrlUser = apiUrl + "users";

export const createUser = ({     
        username,
        firstname,
        lastname,
        email,
        phone,
        club,
        roles}) => {
	return (dispatch) => {
		return axios.post(apiUrlUser, {     
        username,
        firstname,
        lastname,
        email,
        phone,
        club,
        roles}, getAuthHeader( ))
			.then(response => {
				dispatch(createUserSuccess(response.data));
				history.push('/users/'+ response.data.id);
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createUserSuccess = (data) => {
	return {
		type: ADD_USER,
		payload: {  
			id: data.id, 
	        username: data.username,
	        firstname: data.firstname,
	        lastname: data.lastname,
	        email: data.email,
	        phone: data.phone,
	        club: data.club
		}
	}
};

export const listUser = () => {
	return (dispatch) => {
		return axios.get(apiUrlUser, getAuthHeader() )
			.then(response => {
				dispatch(listUserSuccess(response.data))
			})
			.catch(error => {
				console.log('can not get users');
				throw(error);
			});
	};
};

export const listUserSuccess = (users) => {
	return {
		type: LIST_USER,
		users
	}
};