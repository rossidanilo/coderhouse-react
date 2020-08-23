import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom';

const products = [
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

const getItems = function(id){
	const product = products.filter(prod => id === prod.id);
	return product;
}

const ItemDetailContainer = function(){

const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);
const { id } = useParams();

useEffect( () => {
	const task = new Promise( ( resolve, reject ) => {
		setTimeout(() => {
				resolve(getItems(id));
			}, 3000)});

	task.then(
		res => {
			setItem(res);
			setLoading(false)
		},
		err => {console.log(err)},
		);

	}, [id]);

	return(<div>
		{ loading && <Loading />}
		{item.map(it => 
		<ItemDetail
		id={it.id}
		name={it.name}
		brand={it.brand}
		price={it.price}
		initial={it.initial}
		max={it.max}
		min={it.min}
		image={it.image}
		 />)}
		</div>);
}

export default ItemDetailContainer;