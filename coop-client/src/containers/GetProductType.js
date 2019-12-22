// containers/GetProductType.js



import React from 'react';
import { connect } from 'react-redux';
import ProductType from '../components/ProductType';


function GetProductType({productType}) {

	return ( <ProductType productType={productType} /> )

}

const mapStateToProps = (state, ownProps) => {
	const productTypes = state.productTypes;
	let productType = {name: '', reference: '', brand: '', capacity: '', detai: ''};
	let productTypeId = parseInt(ownProps.match.params.id, 10);

	if(productTypes !== undefined && productTypes.length > 0) {
		productType = {...productType, ...productTypes.find(productType => productType.id === productTypeId)};
	}

	return {
		productType
	};
};

export default connect(mapStateToProps)(GetProductType);
