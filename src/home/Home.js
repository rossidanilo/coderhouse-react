import React from 'react';
import Greeting from './components/Greeting.js';

function Home () {
	const greeting = "Welcome to my ecommerce!";
	return (
		<Greeting greeting={greeting} />
		);
}

export default Home;