import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount.js';
import BuyButton from './BuyButton.js';

const PanelContainer = function({name, productId, max, min, initial, text, onAdd}){
	const [quantity, setQuantity] = useState(null);

	const getQuantity = function(counter){
		setQuantity(counter);
	}

	//Este useEffect lo incluí porque quantity en el BuyButton me tiraba undefined
	useEffect(() => {
		setQuantity(initial);
	}, [initial])
	
	return <>
		<ItemCount 
			max={max} 
			min={min} 
			initial={initial} 
			getQuantity={getQuantity}
			/>
		<BuyButton 
			text={text} 
			onAdd={onAdd} 
			quantity={quantity}
			productId={productId}  
			name={name}
			/>
	</>
}

export default PanelContainer;