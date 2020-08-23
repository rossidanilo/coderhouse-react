import React from 'react';
import CheckoutForm from './CheckoutForm.js';
import CheckoutDetail from './CheckoutDetail.js';

const Cart = function(){
	return 	<div className="container">
				<div className="container pt-3 pb-3">
					<h1>Finalizá tu pedido</h1>
				</div>
				<div className="row">
					<div className="col">
						<CheckoutForm />
					</div>
					<div className="col">
						<CheckoutDetail />
					</div>
				</div>
			</div>
}

export default Cart;