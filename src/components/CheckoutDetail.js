import React from 'react';

const CheckoutDetail = function(){
	return <table className="table table-striped">
						  <thead>
						    <tr>
						      <th scope="col">Producto</th>
						      <th scope="col">Cantidad</th>
						      <th scope="col">Precio Unitario</th>
						      <th scope="col">Total</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td>Amortiguador delantero</td>
						      <td>2</td>
						      <td>$20</td>
						      <td>$40</td>
						    </tr>
						    <tr>
						      <td>Kit de embrague</td>
						      <td>1</td>
						      <td>$50</td>
						      <td>$50</td>
						    </tr>
						    <tr className="font-weight-bold">
						    <td colspan="3">Total</td>
						    <td>$90</td>
						    </tr>
						  </tbody>
						</table>
}

export default CheckoutDetail;