import React from 'react';
import { Link } from 'react-router-dom';
import {GreenButton, WhiteButton} from '../../Buttons';
import { SideBar } from '..';
import './styles.css';

const PersonalInfo = () => {
      

	return (
		<div className='personal-info-container'>
			<SideBar personalclass='active' />
			<div className='personal-info-content'>
				<h1>Personal Information</h1>
				<p>Get Started, Tell us about yourself</p>
				<form>
					<div>
						<label htmlFor='cardType'>
							Country
						</label>
						<br />
						<select>
							<option selected disabled hidden>
								Select One
							</option>
							<option>Ghana</option>
							<option>Togo</option>
							<option>Nigeria</option>
						</select>
					</div>
					<div>
						<label htmlFor='cardType'>
							Region
						</label>
						<br />
						<select>
							<option selected disabled hidden>
								Select One
							</option>
							<option>a</option>
							<option>b</option>
							<option>c</option>
						</select>
					</div>
					<div className='bottom'>
						<label htmlFor='fname'>First Name</label>
						<br />
						<input
							type='text'
							name='fname'
							placeholder='Enter First Name'
						/>
					</div>
					<div className='bottom'>
						<label htmlFor='lname'>Last Name</label>
						<br />
						<input
							type='text'
							name='lname'
							placeholder='Enter Last Name'
						/>
					</div>

					<div className='bottom'>
						<label htmlFor='cardType'>
							ID Card Type
						</label>
						<br />
						<select>
							<option selected disabled hidden>
								Select One
							</option>
							<option>NHIS</option>
							<option>Passport</option>
							<option>Voters Card</option>
						</select>
					</div>
					<div className='bottom'>
						<label htmlFor='lname'>ID Number</label>
						<br />
						<input
							type='text'
							name='lname'
							placeholder='Enter ID Number'
						/>
					</div>
				</form>
				<div className='button-container'>
					<Link to='/'>
						<div className='white'>
							<WhiteButton customLabel='Back' />
						</div>
					</Link>
					<Link to='/seller/company'>
						<div className='green'>
							<GreenButton customLabel='Continue' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PersonalInfo;
