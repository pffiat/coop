// components/Club.js


import React from 'react';

function Club (props) {
	return (
		<div>
			<h1>Nom du club: {props.club.name}</h1>
			<p>Adresse : {props.club.address}</p>
			<p>Ville : {props.club.city}</p>
			<p>Code postal : {props.club.postalCode}</p>
			<p>Site : <a href={props.club.urlWebsite} target="_blank" rel="noopener noreferrer">{props.club.urlWebsite}</a></p>
		</div>
	)
}

export default Club;
