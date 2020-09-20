import React, { useState, useEffect } from 'react';

const CheckoutForm = function({getUserData, buyButton, createOrder}){

	const [ emails, setEmails ] = useState([]);
	const [ error, setError ] = useState(null);

	const checkMails = function(){
		console.log('check');
		if(emails.email === emails.email_2){
			setError(false);
		} else {
			setError(true);
		}
	}

	const getEmailData = function(evt){
		setEmails({...emails, [evt.target.id]: evt.target.value});
	}

	useEffect(() => {
		if(emails.email_2 && emails.email_2 != ''){			
			checkMails();
		}
	}, [emails]);

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
						  	<div className="row">
						  		<div className="col">
							    	<label for="email">Email</label>
							    	<input onChange={(e) => {getUserData(e); getEmailData(e)} } type="email" className="form-control" id="email" />
						  		</div>
						  		<div className="col">
							    	<label for="email_2">Confirmar Email</label>
							    	<input onChange={(e) => {getUserData(e); getEmailData(e)} } type="email" className="form-control" id="email_2" />
						  		</div>
						  	</div>
						  </div>
						  {error && <p>Los emails deben ser iguales</p>}
						  <button disabled={buyButton} onClick={createOrder} className="btn btn-primary">REALIZAR PEDIDO</button>
						</>
}						

export default CheckoutForm;