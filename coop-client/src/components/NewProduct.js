// components/NewProduct.js


import React, { useState } from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import SingleDateInput from './SingleDateInput';
import useForm from './CustomFormHooks';



function NewProduct(props) {

	const submit = () => { 
		props.onAddProduct({reference:inputs.reference, 
							entryDate: entryDate, 
							condition:inputs.condition, 
							detail:inputs.detail, 
							product_type:inputs.product_type,
						});
	};

	const {inputs, handleInputChange, handleSubmit} = useForm(submit);
	const [entryDate, setEntryDate] = useState(new Date()); 	


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextInput title="Reference" name="reference" value={inputs.reference} onChange={handleInputChange} />
				<TextInput title="Etat du produit" name="condition" value={inputs.condition} onChange={handleInputChange} />
				<TextInput title="Informations" name="detail" value={inputs.detail} onChange={handleInputChange} />

				<SingleDateInput title="Date d'entrée"
								value="entryDate => setEntryDate(entryDate)} "
								  onChange={setEntryDate} 
							  /> 

				<SelectInput title="Type de produit" name="product_type" 
					options={props.productTypes} value={inputs.product_type} onChange={handleInputChange} />

				<input type="submit" value="Enregister" className="btn btn-primary"/>
			</form>
		</div> 
	)
};
export default NewProduct;