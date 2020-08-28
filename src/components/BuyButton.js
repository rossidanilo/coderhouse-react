import React from 'react';

const BuyButton = function({text, quantity, onAdd}){
	return <div className="card-footer">
  				<button onClick={ () => onAdd(quantity) } className="btn btn-info">
            { text }
            { quantity > 1 ? ' ' + quantity + ' unidades ' :' ' + quantity + ' unidad ' }
          </button>
  			</div>
}

export default BuyButton;