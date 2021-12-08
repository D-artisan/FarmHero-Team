import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

const ErrorPage = () => {
      return (
		<div id='notfound'>
			<div class='notfound'>
				<div class='notfound-404'>
					<h1>Oops!</h1>
					<h2>404 - Can't open on smaller screens</h2>
				</div>
				<Link to='/'>Please Switch to a Laptop</Link>
			
			</div>
		</div>
	);
}
export default ErrorPage