// containers/CreateUser.js


import { connect } from 'react-redux';
import { createUser } from '../actions/actionsUser';
import NewUser from '../components/NewUser';

const mapDispatchToProps = dispatch => {
	return {
		onAddUser: user => {
			dispatch(createUser(user));
		}
	};
};

const mapStateToProps = state => {
	return {
		clubs: state.clubs
	};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewUser);