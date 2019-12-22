// containers/CreateProduct.js

import { connect } from 'react-redux';
import { createProduct } from '../actions/actionsProduct';
import NewProduct from '../components/NewProduct';

const mapDispatchToProps = dispatch => {
	return {
		onAddProduct: product => {
			dispatch(createProduct(product));
		}
	};
};

const mapStateToProps = state => {
	return {
		productTypes: state.productTypes
	};
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewProduct);