import React from 'react';

const CheckoutForm = function(){
	return <form>
						  <div className="form-row">
						    <div className="form-group col-md-6">
						      <label for="name">Nombre</label>
						      <input type="text" className="form-control" id="name" />
						    </div>
						    <div className="form-group col-md-6">
						      <label for="lastname">Apellido</label>
						      <input type="text" className="form-control" id="lastname" />
						    </div>
						  </div>
						  <div className="form-group">
						    <label for="email">Email</label>
						    <input type="email" className="form-control" id="email" />
						  </div>
						  <div className="form-group">
						    <label for="adress">Dirección</label>
						    <input type="text" className="form-control" id="adress" placeholder="1234 Main St" />
						  </div>
						  <div className="form-row">
						    <div className="form-group col-md-6">
						      <label for="city">Ciudad</label>
						      <input type="text" className="form-control" id="city" />
						    </div>
						    <div className="form-group col-md-4">
						      <label for="state">Provincia</label>
						      <select id="state" className="form-control">
						        <option selected>Seleccionar..</option>
						        <option>Buenos Aires</option>
						        <option>CABA</option>
						      </select>
						    </div>
						    <div className="form-group col-md-2">
						      <label for="zip">CP</label>
						      <input type="text" className="form-control" id="zip" />
						    </div>
						  </div>
						  <button type="submit" className="btn btn-primary">REALIZAR PEDIDO</button>
						</form>
}

export default CheckoutForm;