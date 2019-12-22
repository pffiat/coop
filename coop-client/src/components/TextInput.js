// components/TextInput.js

import React from 'react';

function TextInput(props) {
	return (
		<div className="form-group">
		    <label >{props.title}</label>
				<input type="text" className="form-control"
					name={props.name}
					onChange={props.onChange} 
					value={props.value || ''} />
		</div>
		);
}

export default TextInput;