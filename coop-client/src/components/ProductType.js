// components/ProductType.js



import React from 'react';

function ProductType (props) {
	return (
		<div>
			<h1>Nom du produit : {props.productType.name}</h1>
			<p>Référence : {props.productType.reference}</p>
			<p>Marque : {props.productType.brand}</p>
			<p>Fonction : {props.productType.capacity}</p>
			<p>Informations : {props.productType.detail}</p>
		</div>
	)
}

export default ProductType;