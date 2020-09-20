import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import ItemDetail from './ItemDetail.js'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemDetailContainer = function(){

const [ item, setItem ] = useState([]);
const [ loading, setLoading] = useState(true);
const [ error, setError ] = useState(false);
const { id } = useParams();

useEffect( () => {
	const db = getFirestore();

		const itemCollection = db.collection('items');
		const product = itemCollection.doc(id);

		product.get().then((doc)=>{
			if(doc.data() === undefined){
				setLoading(false);
				setError(true);
			} else{
				setLoading(false);
				setItem({ id: doc.id, ...doc.data() });
			}
		});

	}, [id]);

	return(<div>
		{	loading ? 
			<Loading /> : error ? <>
								  <div className="container p-3">
									  <div className="alert alert-danger text-center" role="alert">
	  									Oops! No pudimos encontrar el producto que estás buscando.
									  </div>
									  <div className="text-center">
									  	<Link className="btn btn-info" to="/">
									  	VOLVER AL CATÁLOGO
									  	</Link>
									  </div>
								  </div>
								  </>:
								  <ItemDetail
									id={item.id}
									name={item.title}
									brand={item.brand}
									price={item.price}
									description={item.description}
									initial={item.initial}
									max={item.stock}
									min={item.min}
									image={item.image_id}
									/>
		}
		</div>);
}

export default ItemDetailContainer;