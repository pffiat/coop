// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import rootReducer from './reducers';
import { listReport } from './actions/index';
import { listClub } from './actions/actionsClub';
import { listUser } from './actions/actionsUser';
import { listProductType } from './actions/actionsProductType';
import { listProduct } from './actions/actionsProduct';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(listReport());
store.dispatch(listClub());
store.dispatch(listUser());
store.dispatch(listProductType());
store.dispatch(listProduct());


ReactDOM.render(
	<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
