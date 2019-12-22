// components/Products.js

import React from 'react';
import { Link } from "react-router-dom";

function Products(props) {
	return (
		<>
		
			Ajouter un nouveau produit :  
			<Link className="btn btn-outline-info" to="/create-product">Ajouter un produit</Link><br />

			{!props.products.length && ( <div> Aucun produit pour le moment</div> ) }
			
			<ul>
				{props.products.map( (product) => 
					<li key={product.id} >
						<Link to={"/products/" + product.id}>
							{product.reference} {product.dateEntry} - {product.productType.name}
						</Link> 
					</li>
				)}
			</ul>
		</>
	)
}

export default Products;