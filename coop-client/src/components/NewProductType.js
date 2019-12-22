// components/NewProductType.js


import React from 'react';
import TextInput from './TextInput';
import useForm from './CustomFormHooks';


function NewProductType(props) {
	const submit = () => { 
		props.onAddProductType({name: inputs.name, 
							reference:inputs.reference, 
							brand:inputs.brand, 
							capacity:inputs.capacity, 
							detail:inputs.detail});
	};
	const {inputs, handleInputChange, handleSubmit} = useForm(submit);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextInput title="Nom du type de produit" name="name" value={inputs.name} onChange={handleInputChange} />
				<TextInput title="Reference" name="reference" value={inputs.reference} onChange={handleInputChange} />
				<TextInput title="Marque" name="brand" value={inputs.brand} onChange={handleInputChange} />
				<TextInput title="Fonction" name="capacity" value={inputs.capacity} onChange={handleInputChange} />
				<TextInput title="Informations" name="detail" value={inputs.detail} onChange={handleInputChange} />

				<input type="submit" value="Enregister" className="btn btn-primary"/>
			</form>
		</div> 
	)
};
export default NewProductType;