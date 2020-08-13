import React, {useState} from 'react';
import ProductImage from '../../assets/car-spark-plug.jpg';

const style = {
	card: {
		marginTop: 20,
		width: '30%',
		marginRight: 'auto',
		marginLeft: 'auto',
	},
	icon: {
		fontSize : 14,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	image: {
		width: 200,
		heigth: 200,
		marginRight: 'auto',
		marginLeft: 'auto',
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
			<div className="card" style={style.card}>
  				<img style={style.image} className="card-img-top" src={ProductImage} alt="product-image"/>
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
			</div>
		</>
		);
}

export default ItemCount;