import React from 'react';
import { Link } from 'react-router-dom';
import { GreenButton, WhiteButton } from '../../Buttons';
import { SideBar } from '..';
import './styles.css';

const CompanyInfo = () => {
      
	return (
		<div className='company-info-container'>
			<SideBar companyclass='active' />
			<div className='company-info-content'>
				<h1>Company Information</h1>
				<p>Get Started, Tell us about your business</p>
				<form>
					<div>
						<label htmlFor='fname'>Company Name</label>
						<br />
						<input
							type='text'
							name='fname'
							placeholder='Enter Company Name'
						/>
					</div>
					<div>
						<label htmlFor='cardType'>
							Company Type
						</label>
						<br />
						<select>
							<option disabled selected hidden >Choose Company Type</option>
							<option>Sole Proprietorship</option>
							<option>Limited Liability</option>
							<option>Voters Card</option>
						</select>
					</div>
					<div className='bottom'>
						<label htmlFor='lname'>Company Registration Number</label>
						<br />
						<input type='text' name='lname' placeholder="Enter Company Registration Number"/>
					</div>

					<div className='bottom'>
						<label htmlFor='lname'>TIN Number</label>
						<br />
						<input type='number' name='lname' placeholder="Enter TIN Number"/>
					</div>
				</form>
				<div className='button-container'>
					<Link to='/seller'>
						<div className='white'>
							<WhiteButton customLabel='Back' />
						</div>
					</Link>
					<Link to='/seller/marketplace'>
						<div className='green'>
							<GreenButton customLabel='Continue' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
