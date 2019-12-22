// containers/GetUser.js

import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';


function GetUser(props) {

	return ( <User user={props.user} /> )

}

const mapStateToProps = (state, ownProps) => {
	const users = state.users;
	let user = {name: '', address: '', city: '', postalCode: '', club: ''};
	let userId = parseInt(ownProps.match.params.id, 10);

	if(users !== undefined && users.length > 0) {
		user = {...user, ...users.find(user => user.id === userId)};
	}

	return {
		user
	};
};

export default connect(mapStateToProps)(GetUser);