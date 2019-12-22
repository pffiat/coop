// components/NewClub.js

import React from 'react';
import TextInput from './TextInput';
import useForm from './CustomFormHooks';


function NewClub(props) {
	const submit = () => { 
		props.onAddClub({name: inputs.name, 
							address:inputs.address, 
							city:inputs.city, 
							postalCode:inputs.postalCode});
	};
	const {inputs, handleInputChange, handleSubmit} = useForm(submit);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextInput title="Nom du club" name="name" value={inputs.name} onChange={handleInputChange} />
				<TextInput title="Adresse" name="address" value={inputs.address} onChange={handleInputChange} />
				<TextInput title="Ville" name="city" value={inputs.city} onChange={handleInputChange} />
				<TextInput title="Code postal" name="postalCode" value={inputs.postalCode} onChange={handleInputChange} />

				<input type="submit" value="Enregister" className="btn btn-primary"/>
			</form>
		</div> 
	)
};
export default NewClub;