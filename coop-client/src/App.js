import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { history } from './utils/history'

import ListReport from './containers/ListReport'
import GetReport from './containers/GetReport'
import CreateReport from './containers/CreateReport'

import ListClub from './containers/ListClub'
import GetClub from './containers/GetClub'
import CreateClub from './containers/CreateClub'

import ListProduct from './containers/ListProduct'
import GetProduct from './containers/GetProduct'
import CreateProduct from './containers/CreateProduct'

import ListProductType from './containers/ListProductType'
import GetProductType from './containers/GetProductType'
import CreateProductType from './containers/CreateProductType'

import ListUser from './containers/ListUser'
import GetUser from './containers/GetUser'
import CreateUser from './containers/CreateUser'

import SmartLogin from './containers/SmartLogin'
import Rules from './components/Rules'
import Membership from './components/Membership'
import SmartNav from './containers/SmartNav'

function App() {
  return (
  	<Router history={history}>

  		<SmartNav />

	    <div className="App container">
	        {/* A <Switch> looks through its children <Route>s and
	            renders the first one that matches the current URL. */}

	        <Switch >
	          <Route path="/users/:id" component={GetUser} />
	          <Route path="/users" component={ListUser} />
	          <Route path="/create-user" component={CreateUser } />

	          <Route path="/clubs/:id" component={GetClub} />
	          <Route path="/clubs" component={ListClub} />
	          <Route path="/create-club" component={CreateClub } />

	          <Route path="/products/:id" component={GetProduct} />
	          <Route path="/products" component={ListProduct} />
	          <Route path="/create-product" component={CreateProduct } />

	          <Route path="/productTypes/:id" component={GetProductType} />
	          <Route path="/productTypes" component={ListProductType} />
	          <Route path="/create-productType" component={CreateProductType } />

	          <Route path="/create-report">
	          	<CreateReport />
	          </Route>
	          <Route path="/users" />
		      <Route path="/reports/:id" component={GetReport} />
	          <Route path="/reports" component={ListReport} />
	          <Route path="/login" component={SmartLogin} />
	          <Route path="/reglement" component={Rules} />
	          <Route path="/comment-adherer" component={Membership} />
	          <Route path="/">
	            <Home />
	          </Route>
	        </Switch>
	    </div>
    </Router>
  );
}

function Home() {
	console.log(arguments.login);
	return ( 
		<div> 
			Le contenu de cette page est à définir
		</div>
	)
}

export default App;
