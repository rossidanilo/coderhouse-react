import React from 'react';
import CartIcon from './CartIcon.js';
import NavBarElement from './NavBarElement.js';
import { Link } from 'react-router-dom';

const categories = [
					{id:1, category: 'Amortiguadores'},
					{id:2, category: 'Bujias'},
					{id:3, category: 'Embragues'}
					]

function Navbar() {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">DePartes.com</Link>
				<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
		  				<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorías</a>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								{categories.map(category =>
												<a href={`/category/${category.category.toLowerCase()}`} className="dropdown-item">{category.category}</a>
												)}
							</div>
						</li>
						<CartIcon />
					</ul>
	  			</div>
			</nav>
		)
}

export default Navbar;