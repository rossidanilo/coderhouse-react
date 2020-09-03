import React, {useState, useContext} from 'react';
import { CartContext, useCartContext } from '../context/cartContext.js';
import { Link } from "react-router-dom";

const style = {
	icon: {
		cursor: 'pointer',
	}
}

const CheckoutDetail = function(){
	const { items, addToCart, removeItem } = useCartContext();

	return <table className="table table-striped">
						  <thead>
						    <tr>
						      <th scope="col">Producto</th>
						      <th scope="col">Cantidad</th>
						      <th scope="col">Precio Unitario</th>
						      <th scope="col">Total</th>
						      <th scope="col"></th>
						    </tr>
						  </thead>
						  <tbody>
						  {	
						  	items.length > 0 ?
						  	items.map(item => 
						    <tr>
						      <td><p>{item.name}</p></td>
						      <td><p>{item.quantity}</p></td>
						      <td><p>$20</p></td>
						      <td><p>{item.quantity * 10}</p></td>
						      <td>
						      	<i style={style.icon} onClick={() => removeItem(item.productId)} className="fa fa-trash"></i>
						      </td>
						    </tr>
						  	) :
						  	<tr>
						  		<td colspan="5">
							  		<div class="alert alert-info" role="alert">
	  									Oops! Todavía no agregaste productos al carrito.
	  									<Link className="btn btn-info mt-2" to="/">Comprar productos</Link>
									</div>
						  		</td>
							</tr>
						  }
						  </tbody>
						</table>
}

export default CheckoutDetail;