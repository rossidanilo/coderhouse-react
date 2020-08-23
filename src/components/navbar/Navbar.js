import React from 'react';
import CartIcon from './CartIcon.js';
import NavBarElement from './NavBarElement.js';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark">
  			<Link className="navbar-brand" to="/">DePartes.com</Link>
	    		<ul className="navbar-nav">
	  				<div className="row">
				      	<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
				      	<NavBarElement name="Categorias" destination="/" />
				      	<NavBarElement name="Contacto" destination="/" />
					    <CartIcon />
		  			</div>
		    	</ul>
		</nav>

		)
}

export default Navbar;