// components/ProductTypes.js

import React from 'react';
import { Link } from "react-router-dom";

function ProductType(props) {

	return (
		<>
			{props.login.login && ( 
				<div>Ajouter un nouveau type de produit : 
					<Link className="btn btn-outline-info" to="/create-productType">Ajouter un type de produit</Link>
				</div> 
			)}

			
			

			{!props.productTypes.length && ( <div> Aucun type de produit pour le moment</div> ) }
			
			
			<ul>
				{props.productTypes.map( (productType) => 
					<li key={productType.id} ><Link to={"/productTypes/" + productType.id}>{productType.name} </Link> </li>
				)}
			</ul>
		</>
	)
}

export default ProductType;