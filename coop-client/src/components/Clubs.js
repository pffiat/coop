// components/Clubs.js


import React from 'react';
import { Link } from "react-router-dom";

function Clubs(props) {

	return (
		<>
			{props.login.login && ( 
				<div>Ajouter un nouveau club : 
					<Link className="btn btn-outline-info" to="/create-club">Ajouter un club</Link>
				</div> 
			)}

			
			

			{!props.clubs.length && ( <div> Aucun club pour le moment</div> ) }
			
			
			<ul>
				{props.clubs.map( (club) => 
					<li key={club.id} ><Link to={"/clubs/" + club.id}>{club.name} </Link> </li>
				)}
			</ul>
		</>
	)
}

export default Clubs;