import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CartProvider, useCartContext } from '../../context/cartContext.js';

const style = {
	text: {
		lineHeight:2,
	}
}

function CartIcon() {
	const { items } = useCartContext();
	const [ units, setUnits ] = useState(0);

	const countItems = function(data){
		let counter = 0;
		items.map((item) => {
			counter += item.quantity;
		});
		return counter;
	}

	useEffect(() => {

		setUnits(countItems);

	}, [items])
	return (
		<li className="col nav-item">
			<NavLink className="text-white" to='/cart'>
				<i className="fa fa-shopping-cart" style={style.text}>
					<span className="badge badge-pill badge-light">{units}</span>
				</i>
			</NavLink>
		</li>
		)
}

export default CartIcon;