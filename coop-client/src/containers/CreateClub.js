// containers/CreateClub.js

import { connect } from 'react-redux';
import { createClub } from '../actions/actionsClub';
import NewClub from '../components/NewClub';

const mapDispatchToProps = dispatch => {
	return {
		onAddClub: club => {
			dispatch(createClub(club));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(NewClub);