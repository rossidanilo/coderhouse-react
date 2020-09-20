import React from 'react';
import { Link } from 'react-router-dom';

const Footer = function(){
	return (
		<footer className="footer mt-4 py-3 bg-dark">
  			<div className="container">
    			<div className="row">
    				<div className="col-6">
    					<div className="row">
    						<div className="col">
    							<Link exact to="/" className="text-white">
    								<p>Home</p>
    							</Link>
    						</div>
    						<div className="col">
    							<Link exact to="/" className="text-white">
    								<p>Productos</p>
    							</Link>
    						</div>
    						<div className="col">
    							<Link exact to="/cart" className="text-white">
    								<p>Carrito</p>
    							</Link>
    						</div>
    					</div>
    				</div>
    				<div className="col-4">
    				</div>
    			</div>
 	 		</div>
		</footer>
		);
}

export default Footer;