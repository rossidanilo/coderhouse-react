import React, {useState, useEffect } from 'react';
import BuyButton from './BuyButton.js';

const style = {
	icon: {
		fontSize : 14,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
}

const ItemCount = function({ max, min, initial, onAdd, text, getQuantity }){
	const [counter, setCounter] = useState(null);
	const [maximo, setMaximo] = useState(null);
	const [minimo, setMinimo] = useState(null);
	const [alertMin, setAlertMin ] = useState(false);
	const [alertMax, setAlertMax ] = useState(false);
	
		const removeItem = function(){
			if(counter > min){
				const count = counter - 1;
				setCounter(count);
				{getQuantity(count)};
			} else{
				setAlertMin(true);
				setTimeout(function(){ setAlertMin(false); }, 2000);
			}
		}
		const addItem = function(){
			if(counter < max){
				setCounter(counter+1);
				{getQuantity(counter+1)}
			} else {
				setAlertMax(true);
				setTimeout(function(){ setAlertMax(false); }, 2000);
			}
		}

	useEffect(() => {
		setCounter(initial);
		setMaximo(max);
		setMinimo(min);
	}, [initial, max, min]);

	const style = {
		alert: {
			color: 'red',
		}
	}

	return(
		<>
  			<div className="card-body">
    			<div className="row">
  					<div className="col">
  						<a onClick={removeItem} className="btn btn-info">
  							<i style={style.icon} className="fa fa-minus"></i>
  						</a>
  					</div>
  					<div className="col">
  						<p style={style.text}>{ counter }</p>
  					</div>
  					<div className="col">
  						<a onClick={addItem} className="btn btn-info">
  							<i style={style.icon} className="fa fa-plus"></i>
  						</a>
  					</div>
  				</div>
  				{alertMin && <div className="container"><small style={style.alert}>Se alcanzó el pedido mínimo</small></div>}
  				{alertMax && <div className="container"><small style={style.alert}>Se alcanzó el pedido máximo</small></div>}
  			</div>
		</>
		);
}

export default ItemCount;