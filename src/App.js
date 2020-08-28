import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { cartContext } from './context/cartContext.js';

function App() {  
  return (
<cartContext.Provider value={[]}>
   <BrowserRouter>
    	<div className="App">
      		    <Navbar />
          		<Switch>
          			<Route exact path='/'>
      		      		<Home />
      		      	</Route>
      		      	<Route path='/item/:id'>
      		      		<ItemDetailContainer />
      		      	</Route>
      		      	<Route path='/cart'>
      		      		<Cart />
      		      	</Route>
          		</Switch>
          		<Footer />
    	</div>
    </BrowserRouter>
</cartContext.Provider>
  );
}

export default App;
