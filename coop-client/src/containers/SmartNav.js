// containers/SmartNav.js


import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';


function SmartNav({login}) {

	return ( <Nav login={login} /> )

}

const mapStateToProps = (state) => {
	const { login } = state.login;
	
	return {
		login
	};
};

export default connect(mapStateToProps)(SmartNav);