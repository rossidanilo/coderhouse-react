import React, {useState, useContext, useEffect } from 'react';
import { CartContext, useCartContext } from '../context/cartContext.js';
import { Link } from "react-router-dom";

const style = {
	icon: {
		cursor: 'pointer',
	}
}

const CheckoutDetail = function({getItems, getTotal}){
	const { items, addToCart, removeItem } = useCartContext();

	const calculateTotal = function(elements){
		let total = 0;
		elements.map((element) => {
			total += element.quantity * element.price;
		});

		return total;
	}

	useEffect(() => {
		getItems(items);
		getTotal(calculateTotal(items));
	}, [items]);	

	return <><table className="table table-striped">
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
						      <td><p>$ {item.price}</p></td>
						      <td><p>$ {item.quantity * item.price}</p></td>
						      <td>
						      	<i style={style.icon} 
						      	onClick={() => removeItem(item.productId)} 
						      	className="fa fa-trash">
						      	</i>
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
						<div className="text-center">
							<h5>Total $ {calculateTotal(items)}</h5>
						</div>
						</>
}

export default CheckoutDetail;