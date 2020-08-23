import React from 'react';
import { NavLink } from 'react-router-dom';

function CartIcon() {
	return (
		<li className="col nav-item">
			<NavLink className="text-white" to='/cart'>
				<i className="fa fa-shopping-cart"></i>
			</NavLink>
		</li>
		)
}

export default CartIcon;