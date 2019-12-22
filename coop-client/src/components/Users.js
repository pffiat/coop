// components/Users.js


import React from 'react';
import { Link } from "react-router-dom";

function Users(props) {
	return (
		<>
		
			Ajouter un nouveau utilisateur :  
			<Link className="btn btn-outline-info" to="/create-user">Ajouter un utilisateur</Link><br />

			{!props.users.length && ( <div> Aucun utilisateur pour le moment</div> ) }
			
			<ul>
				{props.users.map( (user) => 
					<li key={user.id} ><Link to={"/users/" + user.id}>{user.firstname} {user.lastname} ( {user.club.name} )</Link> </li>
				)}
			</ul>
		</>
	)
}

export default Users;