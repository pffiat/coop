// containers/GetProduct.js
import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';


function GetProduct({product}) {

	return ( <Product product={product} /> )

}

const mapStateToProps = (state, ownProps) => {
	const products = state.products;
	let product = {reference: '', entryDate: '', condition: '', detai: '', productType:''};
	let productId = parseInt(ownProps.match.params.id, 10);

	if(products !== undefined && products.length > 0) {
		product = {...product, ...products.find(product => product.id === productId)};
	}

	return {
		product
	};
};

export default connect(mapStateToProps)(GetProduct);