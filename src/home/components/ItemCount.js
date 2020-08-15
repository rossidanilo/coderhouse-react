import React, {useState} from 'react';

const style = {
	icon: {
		fontSize : 14,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
}

const ItemCount = function({ max, min, initial, onAdd }){

	const [counter, setCounter] = useState(initial);

	const removeItem = function(){
		counter > min ? setCounter(counter-1) : console.log('Se llegó al límite minimo');
	}

	const addItem = function(){
		counter < max ? setCounter(counter+1) : console.log('Se llegó al límite máximo');
	}

	return(
		<>
  			<div className="card-body">
    			<div className="row">
  					<div className="col">
  						<a onClick={removeItem} className="btn btn-info">
  							<i style={style.icon} class="fa fa-minus"></i>
  						</a>
  					</div>
  					<div className="col">
  						<p style={style.text}>{ counter }</p>
  					</div>
  					<div className="col">
  						<a onClick={addItem} className="btn btn-info">
  							<i style={style.icon} class="fa fa-plus"></i>
  						</a>
  					</div>
  				</div>
  			</div>
  			<div className="card-footer">
  				<button onClick={ () => onAdd(counter) } className="btn btn-info">Agregar al carrito</button>
  			</div>
		</>
		);
}

export default ItemCount;