// containers/GetReport.js


import React from 'react';
import { connect } from 'react-redux';
import Report from '../components/Report';


function GetReport({report}) {

	return ( <Report report={report} /> )

}

const mapStateToProps = (state, ownProps) => {
	const reports = state.reports;
	let report = {title: '', content: ''};
	let reportId = parseInt(ownProps.match.params.id, 10);

	if(reports !== undefined && reports.length > 0) {
		report = {...report, ...reports.find(report => report.id === reportId)};
	}

	return {
		report
	};
};

export default connect(mapStateToProps)(GetReport);