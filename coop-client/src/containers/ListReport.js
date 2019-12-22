// containers/ListReport.js

import React from 'react';
import { connect } from 'react-redux';
import Reports from '../components/Reports';


function ListReport({reports, login}) {
	if(!login) {
		return (
			<div>Veuillez-vous connecter pour accéder à cette ressource.</div>
		)
	}

	return ( <Reports reports={reports} /> )

}


const mapStateToProps = state => {
	return {
		reports: state.reports,
		login: state.login
	};
};

export default connect(
	mapStateToProps,
	null
)(ListReport)