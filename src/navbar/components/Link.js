import React from 'react';

function Link ({name}){
	return (
		<>
		<li className="col nav-item">
			<a className="nav-link" href="#">{name}</a>
		</li>
		</>
		);
}

export default Link;