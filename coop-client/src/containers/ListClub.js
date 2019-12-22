// constainers/ListClub.js


import React from 'react';
import { connect } from 'react-redux';
import Clubs from '../components/Clubs';


function ListClub({clubs, login}) {

	return ( <Clubs clubs={clubs} login={login}/> )

}


const mapStateToProps = state => {
	return {
		clubs: state.clubs,
		login: state.login
	};
};

export default connect(
	mapStateToProps,
	null
)(ListClub)