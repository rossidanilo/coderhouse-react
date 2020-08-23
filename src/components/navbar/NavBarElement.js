import React from 'react';
import { NavLink } from "react-router-dom";

function NavBarElement ({name, destination}){
	return (
		<>
		<li className="col nav-item">
			<NavLink className="nav-link" to={destination}>{name}</NavLink>
		</li>
		</>
		);
}

export default NavBarElement;