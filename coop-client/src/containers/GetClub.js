// containers/GetClub.js


import React from 'react';
import { connect } from 'react-redux';
import Club from '../components/Club';


function GetClub({club}) {

	return ( <Club club={club} /> )

}

const mapStateToProps = (state, ownProps) => {
	const clubs = state.clubs;
	let club = {name: '', address: '', city: '', postalCode: ''};
	let clubId = parseInt(ownProps.match.params.id, 10);

	if(clubs !== undefined && clubs.length > 0) {
		club = {...club, ...clubs.find(club => club.id === clubId)};
	}

	return {
		club
	};
};

export default connect(mapStateToProps)(GetClub);
