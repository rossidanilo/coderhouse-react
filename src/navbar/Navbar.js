import React from 'react';

function Navbar() {
	return (

		<nav className="navbar navbar-dark bg-dark">
  			<a className="navbar-brand" href="#">DePartes.com</a>
	    		<ul className="navbar-nav">
	  				<div className="row">
				      	<li className="col nav-item active">
				        	<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      	</li>
				      	<li className="col nav-item">
				        	<a className="nav-link" href="#">Productos</a>
				      	</li>
					    <li className="col nav-item">
					      	<a className="nav-link" href="#">FAQs</a>
					    </li>
					    <li className="col nav-item">
					        <a className="nav-link" href="#">Contacto</a>
					    </li>
					    <li className="col nav-item">
					        <a className="nav-link" href="#"><i className="fa fa-shopping-cart"></i></a>
					    </li>
		  			</div>
		    	</ul>
		</nav>

		)
}

export default Navbar;