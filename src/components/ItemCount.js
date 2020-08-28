import React, {useState} from 'react';
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

	const [counter, setCounter] = useState(initial);

	const removeItem = function(){
		if(counter > min){
			const count = counter - 1;
			setCounter(count);
			{getQuantity(count)};
		} else{
			console.log('Se llegó al límite minimo')
		}
		//counter > min ? setCounter(counter-1) : console.log('Se llegó al límite minimo');
	}

	const addItem = function(){
		if(counter < max){
			setCounter(counter+1);
			{getQuantity(counter+1)}
		} else {
			console.log('Se llegó al límite máximo')
		}
		//counter < max ? setCounter(counter+1) : console.log('Se llegó al límite máximo');
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
  			</div>
		</>
		);
}

export default ItemCount;