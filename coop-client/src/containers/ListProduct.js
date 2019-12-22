// containers/ListProduct.js


import React from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';


function ListProduct({products, login}) {

	return ( <Products products={products} login={login}/> )

}


const mapStateToProps = state => {
	return {
		products: state.products,
		login: state.login
	};
};

export default connect(
	mapStateToProps,
	null
)(ListProduct)