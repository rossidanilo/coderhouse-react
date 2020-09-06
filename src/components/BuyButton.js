import React, { useContext, useState } from 'react';
import { CartProvider, useCartContext } from '../context/cartContext.js';

const BuyButton = function({name, productId, text, quantity, onAdd}){
	const { items, addToCart } = useCartContext();
	
	return <div className="card-footer">
  				<button onClick={ () => addToCart(name, quantity, productId) } className="btn btn-info">
            		{ text }
            		{ quantity > 1 ? ' ' + quantity + ' unidades ' :' ' + quantity + ' unidad ' }
          		</button>
  			</div>
}

export default BuyButton;