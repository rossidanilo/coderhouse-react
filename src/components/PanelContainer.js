import React, { useState } from 'react';
import ItemCount from './ItemCount.js';
import BuyButton from './BuyButton.js';

const PanelContainer = function({max, min, initial, text, onAdd}){
	const [quantity, setQuantity] = useState(initial);

	const getQuantity = function(counter){
		setQuantity(counter);
	}
	
	return <>
		<ItemCount max={max} min={min} initial={initial} getQuantity={getQuantity}/>
		<BuyButton text={text} onAdd={onAdd} quantity={quantity}  />
	</>
}

export default PanelContainer;