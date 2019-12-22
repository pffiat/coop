// components/NewUser.js


import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import useForm from './CustomFormHooks';


function NewUser(props) {
	const submit = () => { 
		props.onAddUser({
	        username: inputs.username,
	        firstname: inputs.firstname,
	        lastname: inputs.lastname,
	        email: inputs.email,
	        phone: inputs.phone,
	        club: inputs.club});
	};
	const {inputs, handleInputChange, handleSubmit} = useForm(submit);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextInput title="Prénom" name="firstname" value={inputs.firstname} onChange={handleInputChange} />
				<TextInput title="Nom" name="lastname" value={inputs.lastname} onChange={handleInputChange} />
				<TextInput title="Téléphone" name="phone" value={inputs.phone} onChange={handleInputChange} />
				<TextInput title="Email" name="email" value={inputs.email} onChange={handleInputChange} />

				<SelectInput title="Club" name="club" options={props.clubs} value={inputs.club} onChange={handleInputChange} />

				<input type="submit" value="Enregister" className="btn btn-primary"/>
			</form>
		</div> 
	)
};
export default NewUser;