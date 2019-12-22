// containers/CreateProductType.js

import { connect } from 'react-redux';
import { createProductType } from '../actions/actionsProductType';
import NewProductType from '../components/NewProductType';

const mapDispatchToProps = dispatch => {
	return {
		onAddProductType: productType => {
			dispatch(createProductType(productType));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(NewProductType);