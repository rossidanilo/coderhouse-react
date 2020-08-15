import React from 'react';
import Greeting from './components/Greeting.js';
import ItemList from './components/ItemList.js';

const Home = function () {
	const greeting = "Welcome to my ecommerce!";
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemList />
		</>)
}

export default Home;