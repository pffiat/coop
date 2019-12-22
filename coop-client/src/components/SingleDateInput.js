// components/SingleDateInput.js

import DatePicker  from 'react-datepicker';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);

class SingleDateInput extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    this.props.onChange({date})
  };
	render(){
			return (
				<div className="form-group">
				    <label >{this.props.title}</label> <br/>
							<DatePicker
								//selected={entryDate} 
							  	//onChange={entryDate => setEntryDate(entryDate)}

						        selected={this.state.startDate}
						        onChange={this.handleChange}
							  	dateFormat="dd/MM/yyyy"
							  	locale="fr"
							/>
				</div>
		);
	}
}

export default SingleDateInput;