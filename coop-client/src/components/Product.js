// components/Product.js


import React from 'react';
import ProductType from '../components/ProductType';

function Product (props) {
	return (
		<div>
			<h1>Reference : {props.product.reference}</h1>
			<h2>Date d'entrée : {props.product.entryDate}</h2>
			<p>Etat du matériel : {props.product.condition}</p>
			<p>Informations : {props.product.detail}</p>

			<ProductType productType={props.product.productType} />
		</div>
	)
}

export default Product;