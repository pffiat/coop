// containers/ListProductType.js


import React from 'react';
import { connect } from 'react-redux';
import ProductTypes from '../components/ProductTypes';


function ListProductType({productTypes, login}) {

	return ( <ProductTypes productTypes={productTypes} login={login}/> )

}


const mapStateToProps = state => {
	return {
		productTypes: state.productTypes,
		login: state.login
	};
};

export default connect(
	mapStateToProps,
	null
)(ListProductType)