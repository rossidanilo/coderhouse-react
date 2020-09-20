import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm.js';
import CheckoutDetail from './CheckoutDetail.js';
import Loading from './Loading.js';
import { CartContext, useCartContext } from '../context/cartContext.js';
import * as firebase from 'firebase/app';
import { getFirestore } from '../firebase';

const Cart = function(){
	const { setItems } = useCartContext();
	const [ userData, setUserData ] = useState([]);
	const [ cartItems, setCartItems ] = useState([]);
	const [ total, setTotal ] = useState(null);
	const [ enableBuyButton, setEnableBuyButton ] = useState(true);
	const [ order, setOrder ] = useState(null);
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);

	const checkUserData = function(){
		if( userData.name && 
			userData.phone &&
			userData.email &&
			userData.email_2){
			setEnableBuyButton(false);
		}
	}

	const getUserData = function(evt){
		setUserData({...userData, [evt.target.id]: evt.target.value});
		checkUserData();
	}

	const getItems = function(data){
		setCartItems(data);
	}

	const getTotal = function(orderTotal){
		setTotal(orderTotal);
	}

	const createOrder = async function(){
		setLoading(true);
		const db = getFirestore();

		//check items stock
		const items = cartItems.map(cartItem => ({id: cartItem.productId, quantity: cartItem.quantity}));
		const itemsToUpdate = db.
							collection('items').where(firebase.firestore.FieldPath.documentId(), 
										'in', items.map(i => i.id));
		const query = await itemsToUpdate.get();
		const batch = db.batch();
		
		const outOfStock = [];
		try {
			query.docs.forEach((docSnapShot, idx) => {
					if (docSnapShot.data().stock >= items[idx].quantity) {
						batch.update(docSnapShot.ref, { stock: docSnapShot.data().stock - items[idx].quantity});
					} else {
						outOfStock.push({...docSnapShot.data(), id:docSnapShot.id });
					}
				});} catch(err){
			setLoading(false);
			console.log(err)
		}

		if(outOfStock.length === 0){
			await batch.commit();	
			//create order
			const orders = db.collection('orders');
			const newOrder = {
				buyer: userData,
				items: cartItems,
				date: firebase.firestore.Timestamp.fromDate(new Date()),
				total: total
			}
			orders.add(newOrder).then(({id}) => {
				setLoading(false);
				setOrder(id);
				setItems([])
			}).catch( err => {
				console.log(err);
			});
		}else {
			console.log('No hay stock');
		}

	}

const style = {
  body : {
    minHeight: 475,
  }
}


	return 	<div className="container" style={style.body}>
				{ order ? <div className="container pt-3 pb-3">
							<h3>El pedido {order} fue ingresado con éxito</h3>
							<h4>Gracias por tu compra!</h4>
						  </div>
						:
				<>
				<div className="container pt-3 pb-3">
					<h1>Finalizá tu pedido</h1>
				</div>
				{
					loading ? <Loading /> :
					<div className="row">
						<div className="col">
							<CheckoutForm getUserData={getUserData} createOrder={createOrder} buyButton={enableBuyButton} />
						</div>
						<div className="col">
							<CheckoutDetail getItems={getItems} getTotal={getTotal} />
						</div>
					</div>
				}
				</>
				}
			</div>
}

export default Cart;