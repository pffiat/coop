// components/Nav.js

import React from 'react';
import {
  Link
} from "react-router-dom";
import LogButton from '../containers/LogButton';

export default function Nav(props) {
	return (

    	<nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clubs">Clubs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Produits</Link>
            </li>

            {props.login && (
            	<>
	            <li className="nav-item">
	              <Link className="nav-link" to="/users">Utilisateurs</Link>
	            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports">Comptes rendus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productTypes">Type de produit</Link>
              </li>
	            </>
	        )}

          </ul>
	        <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/reglement">Le règlement</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comment-adherer">Comment adhérer</Link>
              </li>
	            <li className="nav-item">
        			<LogButton />
	            </li>
	        </ul>

        </nav>
    )
}