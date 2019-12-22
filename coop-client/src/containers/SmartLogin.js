// containers/SmartLogin.js

import { connect } from 'react-redux';
import { login } from '../actions';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => {
	return {
		onLogin: ({username, password}) => {
			dispatch(login(username, password));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Login);