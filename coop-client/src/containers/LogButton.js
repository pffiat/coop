// containers/LogButton.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


function LogButton({login}) {

	if(login) {
		return ( <Link className="btn btn-outline-info" to="/logout">Se déconnecter</Link> )
	}

	return ( <Link className="btn btn-outline-info" to="/login">Se connecter</Link> )

}

const mapStateToProps = (state) => {
	const { login } = state.login;
	
	return {
		login
	};
};

export default connect(mapStateToProps)(LogButton);