import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
	text: {
		lineHeight:2,
	}
}

function CartIcon() {
	return (
		<li className="col nav-item">
			<NavLink className="text-white" to='/cart'>
				<i className="fa fa-shopping-cart" style={style.text}></i>
			</NavLink>
		</li>
		)
}

export default CartIcon;