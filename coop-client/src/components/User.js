// component/User.js


import React from 'react';
import Club from '../components/Club';

function User (props) {
	return (
		<div>
			<h1>Prénom: {props.user.firstname}</h1>
			<h2>Nom : {props.user.lastname}</h2>
			<p>Téléphone : {props.user.phone}</p>
			<p>Mail: {props.user.email}</p>

			<Club club={props.user.club} />
		</div>
	)
}

export default User;