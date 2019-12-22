// action/actionsClub.js

import { ADD_CLUB, LIST_CLUB } from './types';

import axios from 'axios';
import { history } from '../utils/history';
import { apiUrl } from '../utils/constants';


const apiUrlClub = apiUrl + "public/clubs";

export const createClub = ({name, address, city, postalCode}) => {
	return (dispatch) => {
		return axios.post(apiUrlClub, {name, address, city, postalCode})
			.then(response => {
				dispatch(createClubSuccess(response.data));
				history.push('/clubs/'+ response.data.id);
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createClubSuccess = (data) => {
	return {
		type: ADD_CLUB,
		payload: {
			data
		}
	}
};

export const listClub = () => {
	return (dispatch) => {
		return axios.get(apiUrlClub)
			.then(response => {
				dispatch(listClubSuccess(response.data))
			})
			.catch(error => {
				console.log('can not get Clubs');
				throw(error);
			});
	};
};

export const listClubSuccess = (clubs) => {
	return {
		type: LIST_CLUB,
		clubs
	}
};