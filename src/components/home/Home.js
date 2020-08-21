import React from 'react';
import Greeting from './Greeting.js';
import ItemList from './ItemList.js';
import ItemDetailContainer from './ItemDetailContainer.js';

const Home = function () {
	const greeting = "Welcome to my ecommerce!";
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemList />
		<ItemDetailContainer />
		</>)
}

export default Home;