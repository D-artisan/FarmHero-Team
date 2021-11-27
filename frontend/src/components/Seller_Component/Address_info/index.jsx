import React from 'react';
import { Link } from 'react-router-dom';
import { GreenButton, WhiteButton } from '../../Buttons';
import { SideBar } from '..';
import './styles.css';

	const AddressInfo = () => {
		
		return (
			<div className='address-info-container'>
				<SideBar  />
				<div className='address-info-content'>
					<h1>Address Information</h1>
					<p>
						Get Started, Let us know your Official
						Location
					</p>
					<form>
						<div>
							<label htmlFor='cardType'>
								Region
							</label>
							<br />
							<select>
								<option selected disabled hidden>Select One</option>
								<option>NHIS</option>
								<option>Passport</option>
								<option>Voters Card</option>
							</select>
						</div>
						<div>
							<label htmlFor='lname'>
								Town/City
							</label>
							<br />
							<input type='text' name='lname' placeholder="Enter Your Current Town/City"/>
						</div>
						<div className='bottom'>
							<label htmlFor='fname'>
								Address 1
							</label>
							<br />
							<input type='text' name='fname' placeholder="Enter Your First Address"/>
						</div>
						<div className='bottom'>
							<label htmlFor='lname'>
								Address 2
							</label>
							<br />
							<input type='text' name='lname' placeholder="Enter Your Second Address"/>
						</div>
					</form>
					<div className='button-container'>
						<Link to='/seller/company'>
							<div className='white'>
								<WhiteButton customLabel='Back' />
							</div>
						</Link>
						<Link to='/seller/marketplace'>
						<div className='green'>
							<GreenButton customLabel='Done' />
						</div>
						</Link>
					</div>
				</div>
			</div>
		);
	};

	export default AddressInfo;
