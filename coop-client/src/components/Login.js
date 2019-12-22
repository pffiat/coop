// components/Login.js

import React from 'react';
import TextInput from './TextInput';
import useForm from './CustomFormHooks';

export default function Login(props) {


	const submit = () => { 
		props.onLogin({username: inputs.username, password:inputs.password});
	};

	const {inputs, handleInputChange, handleSubmit} = useForm(submit);

	return (

      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">Merci de rentrer vos identifiants pour vous connecter </h2>
        
		<TextInput title="Utilisateur" name="username" value={inputs.username} onChange={handleInputChange} />

		<TextInput title="Mot de passe" name="password" value={inputs.password} onChange={handleInputChange} />


		<input type="submit" value="Enregister" className="btn btn-primary"/>
      </form>

	)
}

