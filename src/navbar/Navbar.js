import React from 'react';
import Cart from './components/Cart.js';
import Link from './components/Link.js';

function Navbar() {
	return (

		<nav className="navbar navbar-dark bg-dark">
  			<a className="navbar-brand" href="#">DePartes.com</a>
	    		<ul className="navbar-nav">
	  				<div className="row">
				      	<Link name="Home" />
				      	<Link name="Productos" />
				      	<Link name="Categorias" />
				      	<Link name="Contacto" />
					    <Cart />
		  			</div>
		    	</ul>
		</nav>

		)
}

export default Navbar;