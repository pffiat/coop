// reducers//index.js

import { combineReducers } from 'redux';
import clubs from './clubReducer';
import reports from './reportReducer';
import productTypes from './productTypeReducer';
import products from './productReducer';
import users from './userReducer';
import login from './loginReducer';

export default combineReducers({
	reports,
	clubs,
	productTypes,
	products,
	users,
	login
});