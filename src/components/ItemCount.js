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
	
		const removeItem = function(){
			if(counter > min){
				const count = counter - 1;
				setCounter(count);
				{getQuantity(count)};
			} else{
				console.log('Se llegó al límite minimo')
			}
		}
		const addItem = function(){
			if(counter < max){
				setCounter(counter+1);
				{getQuantity(counter+1)}
			} else {
				console.log('Se llegó al límite máximo')
			}
		}

	//Este useEffect lo incluí porque max,min e initial me tiraban undefined
	useEffect(() => {
		setCounter(initial);
		setMaximo(max);
		setMinimo(min);
	}, [initial, max, min]);

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
  			</div>
		</>
		);
}

export default ItemCount;