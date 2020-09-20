import React, { useState } from 'react';
import PanelContainer from './PanelContainer.js';

const ItemDetail = function({id, name, brand, price, description, initial, max, min, image}) {

	const style = {
		image: {
			borderWidth: 0,
		}
	}

	return 	<div className='container'>
				<div className='row text-center'>
					<div className='col'>
						<img src={image} className='img-thumbnail' style={style.image} />
					</div>
					<div className='col container'>
						<div className='pt-5'>
							<h2>{name}</h2>
							<h4>{'Marca: '+ brand}</h4>
							<h4>{'$ ' + price}</h4>
							<p>{ description }</p>
							<hr/>
						</div>
						<div className='pt-5'>
							<PanelContainer
							max={max}
							min={min}
							initial={initial}
							text="Comprar"
							productId ={id}
							name={name}
							price={price}
							/>
						</div>
					</div>
				</div>
			</div>
}

export default ItemDetail;