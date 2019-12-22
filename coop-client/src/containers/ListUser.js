// containers/ListUser.js


import React from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';


function ListUser({users, login}) {
	if(!login) {
		return (
			<div>Veuillez-vous connecter pour accéder à cette ressource.</div>
		)
	}
	

	return ( <Users users={users} /> )

}


const mapStateToProps = state => {
	return {
		users: state.users,
		login: state.login
	};
};

export default connect(
	mapStateToProps,
	null
)(ListUser)