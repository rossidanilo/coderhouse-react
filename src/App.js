import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {  
  return (
   <BrowserRouter>
    	<div className="App">
		    <Navbar />
    		<Switch>
    			<Route exact path='/'>
		      		<Home />
		      	</Route>
    		</Switch>
    	</div>
    </BrowserRouter>
  );
}

export default App;
