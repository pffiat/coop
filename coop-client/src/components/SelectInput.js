// components/SelectInput.js


import React from 'react';

function SelectInput(props) {
	return (
		<div className="form-group">
		    <label >{props.title}</label>
				<select className="form-control"
					name={props.name}
					onChange={props.onChange} 
					value={props.value} >
						<option key="nada" value=""></option>

					{props.options.map( (option) => 
						<option key={option.id} value={option.id}>{option.name}</option>
					)}

				</select>
		</div>
		);
}

export default SelectInput;