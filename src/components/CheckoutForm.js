import React from 'react';

const CheckoutForm = function({getUserData, buyButton, createOrder}){

	return 				<>
						  <div className="form-row">
						    <div className="form-group col-md-6">
						      <label for="name">Nombre</label>
						      <input onChange={getUserData} type="text" className="form-control" id="name" />
						    </div>
						    <div className="form-group col-md-6">
						      <label for="phone">Teléfono</label>
						      <input onChange={getUserData} type="number" className="form-control" id="phone" />
						    </div>
						  </div>
						  <div className="form-group">
						    <label for="email">Email</label>
						    <input onChange={getUserData} type="email" className="form-control" id="email" />
						  </div>  
						  <button disabled={buyButton} onClick={createOrder} className="btn btn-primary">REALIZAR PEDIDO</button>
						</>
}						

export default CheckoutForm;