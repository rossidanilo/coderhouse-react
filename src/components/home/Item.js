import React from 'react';
import PanelContainer from '../PanelContainer.js';
import { Link } from 'react-router-dom';

const style = {
	link: {
		textDecoration: 'none',
	},
	card: {
		marginTop: 20,
		width: '30%',
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingTop: 20,
	},
	image: {
		width: 200,
		heigth: 200,
		marginRight: 'auto',
		marginLeft: 'auto',
	},
}

const Item = function({id, name, brand, price, initial, min, max, image}){
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
	return(
			<div className="card align-items-stretch" style={style.card}>
				<Link style={style.link} to={`/item/${id}`}>
					<h3>{name}</h3>
				</Link>
				<h5>{brand}</h5>
				<p>${price}</p>
	  			<img style={style.image} className="card-img-top img-thumbnail" src={image} alt="product-image"/>
				<PanelContainer 
					max={max} 
					min={min} 
					initial={initial} 
					text="Agregar al carrito"
					productId = {id}
					name={name}
					price={price}
					/>
			</div>
		);
}

export default Item;