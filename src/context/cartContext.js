import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);

	const addToCart = function(name, quantity, id, price){
		const item = [...items, {'productId': id, 'name': name, 'quantity': quantity, 'price': price}];
		setItems(item);
	}

	const removeItem = function(id){
		if (items.length > 0) {
			const updateItems = items.filter(function (item){
				return item.productId !== id;
			});
			setItems(updateItems);
		}
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem}}>
{children}
</CartContext.Provider>
}