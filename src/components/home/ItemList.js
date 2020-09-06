import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import Loading from '../Loading.js'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ItemList = function(){
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const { category_id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const itemCollection = db.collection('items');
		let validItems = itemCollection.where('price', '>', 0);

		if(category_id){
			validItems = validItems.where('category_id', '==', category_id);
			console.log(validItems);
		}

		validItems.get().then((data)=>{
			if(!data.length === 0){
				console.log('No se encontraron productos');
			}
			setLoading(false);
			setProducts(data.docs.map(doc => ({...doc.data(), id: doc.id})));
		});

	}, [category_id]);

				return <> 
				{loading && <Loading />}
				<div className='row'>
					{products.map(product => 
								<Item 
								id={product.id}
								name={product.title}
								brand={product.brand}
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.stock}
								image={product.image_id}
								/>)}
				</div>
				</>
}

export default ItemList;