// containers/CreateReport.js

import { connect } from 'react-redux';
import { createReport } from '../actions';
import NewReport from '../components/NewReport';

const mapDispatchToProps = dispatch => {
	return {
		onAddReport: report => {
			dispatch(createReport(report));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(NewReport);