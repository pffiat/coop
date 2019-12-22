// components/NewReport.js

import React, { useState } from 'react';
import TextInput from './TextInput';
import useForm from './CustomFormHooks';

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

function NewReport(props) {
	const submit = () => { 
		props.onAddReport({title: inputs.title, content:text});
	};
	const {inputs, handleInputChange, handleSubmit} = useForm(submit);

	const [text, setText] = useState('');

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextInput title="Titre" name="title" value={inputs.title} onChange={handleInputChange} />

				<div className="form-group">
	    			<label >Contenu</label>
			    	<ReactQuill value={text} onChange={setText} />
	 			</div>
				<input type="submit" value="Enregister" className="btn btn-primary"/>
			</form>
		</div> 
	)
};
export default NewReport;