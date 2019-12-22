// actions/index.js

import { ADD_REPORT, LIST_REPORT, LOGIN } from './types';

import axios from 'axios';
import { history } from '../utils/history';
import getAuthHeader from '../utils/auth';
import { apiUrl } from '../utils/constants';

const apiUrlReport = apiUrl + "reports/";


export const createReport = ({title, content}) => {
	return (dispatch) => {
		return axios.post(apiUrlReport, {title, content}, getAuthHeader())
			.then(response => {
				dispatch(createReportSuccess(response.data));
				history.push('/reports/'+ response.data.id);
			})
			.catch(error => {
				throw(error);
			});
	};
};

export const createReportSuccess = (data) => {
	return {
		type: ADD_REPORT,
		payload: {
			id: data.id,
			title: data.title,
			content: data.content
		}
	}
};

export const listReport = () => {
	return (dispatch) => {
		return axios.get(apiUrlReport, getAuthHeader())
			.then(response => {
				dispatch(listReportSuccess(response.data))
			})
			.catch(error => {
				console.log('can not get reports');
				throw(error);
			});
	};
};

export const listReportSuccess = (reports) => {
	return {
		type: LIST_REPORT,
		reports
	}
};


const apiUrlLogin = apiUrl + "api/auth/signin";

export const login = (username, password) => {
	return (dispatch) => {
		return axios.post(apiUrlLogin, {username, password})
			.then(response => {
				sessionStorage.setItem("tokenType", response.data.tokenType.replace("\"", ""));
				sessionStorage.setItem("accessToken", response.data.accessToken.replace("\"", ""));
				dispatch(loginSuccess());
				history.push('/');
			})
			.catch(error => {
				console.log('can not log in');
				throw(error);
			});
	};
};

export const loginSuccess = () => {
	return {
		type: LOGIN,
		payload: { login: true }
	}
};
