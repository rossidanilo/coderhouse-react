import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartProvider, useCartContext } from '../../context/cartContext.js';

const style = {
	text: {
		lineHeight:2,
	}
}

function CartIcon() {
	const { items } = useCartContext();
	return (
		<li className="col nav-item">
			<NavLink className="text-white" to='/cart'>
				<i className="fa fa-shopping-cart" style={style.text}>
					<span className="badge badge-pill badge-light">{items.length}</span>
				</i>
			</NavLink>
		</li>
		)
}

export default CartIcon;