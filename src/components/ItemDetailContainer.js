import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemDetailContainer = function(){

const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);
const { id } = useParams();

useEffect( () => {
	const db = getFirestore();

		const itemCollection = db.collection('items');
		const product = itemCollection.doc(id);

		product.get().then((doc)=>{
			if(!doc.length === 0){
				console.log('No existe el producto');
			}
			setLoading(false);
			setItem({ id: doc.id, ...doc.data() });
		});

	}, [id]);

	return(<div>
		{	loading ? 
			<Loading /> : 
			<ItemDetail
				id={item.id}
				name={item.title}
				brand={item.brand}
				price={item.price}
				initial={item.initial}
				max={item.stock}
				min={item.min}
				image={item.image_id}
				 />
		}
		</div>);
}

export default ItemDetailContainer;