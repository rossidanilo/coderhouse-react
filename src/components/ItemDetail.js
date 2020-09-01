import React, { useState } from 'react';
import PanelContainer from './PanelContainer.js';

const ItemDetail = function({id, name, brand, price, initial, max, min, image}) {

	return 	<div className='container'>
				<div className='row text-center'>
					<div className='col'>
						<img src={image} className='img-thumbnail' />
					</div>
					<div className='col container'>
						<div className='pt-5'>
							<h2>{name}</h2>
							<h4>{'Marca: '+ brand}</h4>
							<h4>{'$ ' + price}</h4>
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
							/>
						</div>
					</div>
				</div>
			</div>
}

export default ItemDetail;