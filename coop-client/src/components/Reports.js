// components/Reports.js

import React from 'react';
import { Link } from "react-router-dom";

function Reports(props) {
	return (
		<>
			Ajouter un nouveau compte rendu de réunion :  
			<Link className="btn btn-outline-info" to="/create-report">Ajouter un rapport</Link><br />

			{!props.reports.length && ( <div> Aucun rapport pour le moment</div> ) }
			
			
			<ul>
				{props.reports.map( (report) => 
					<li key={report.id} ><Link to={"/reports/" + report.id}>{report.title} </Link> </li>
				)}
			</ul>
		</>
	)
}

export default Reports;