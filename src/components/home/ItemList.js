import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import Loading from '../Loading.js'

const catalog = [
{
	id:'1', 
	name: 'Amortiguador Delantero', 
	brand: 'Sachs', 
	price: 50, 
	initial: 2, 
	min: 2, 
	max: 10, 
	image: 'https://5.imimg.com/data5/AQ/LO/MY-49619103/bike-shock-absorber-500x500.jpg'
},
{
	id:'2', 
	name: 'Embrague', 
	brand: 'Luk', 
	price: 100, 
	initial: 1, 
	min: 1, 
	max: 10,
	image: 'https://5.imimg.com/data5/KT/MR/MY-62371817/mahindra-clutch-kit-500x500.jpg'
},
{
	id:'3', 
	name: 'Bujia', 
	brand: 'NGK', 
	price: 20, 
	initial: 4, 
	min: 4, 
	max: 8, 
	image: 'https://images.homedepot-static.com/productImages/3b233c00-abcd-4ffd-bbbb-4c2cced3fe61/svn/ngk-ignition-systems-3611-64_1000.jpg'
}
];

const ItemList = function(){
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const task =  new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(catalog);
			}, 2000)});
	
	task.then(
		res => {
			setProducts(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, []);

				return <> 
				{loading && <Loading />}
				<div className='row'>
					{products.map(product => 
								<Item 
								id={product.id}
								name={product.name}
								brand={product.brand}
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.max}
								image={product.image}
								/>)}
				</div>
				</>
}

export default ItemList;