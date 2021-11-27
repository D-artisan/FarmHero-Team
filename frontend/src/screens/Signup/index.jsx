import React from 'react';
import './styles.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';
const SignUp = () => {
	return (
		<div className='signup-container'>
			<div className='signup-content-container'>
				<img src={Logo.Asset_default_logo} alt='logo' />
				<h1>Create Account</h1>
				<p>
					Already having an account?{' '}
					<Link to='/'>
						<span className='span-signup'>Login</span>
					</Link>
				</p>
				<div className='form-content-container'>
					<form>
						<div className='form-content'>
							<label htmlFor='cardType'>
								Choose Service Type
							</label>
							<br />
							<select className='signup-select'>
								<option selected hidden disabled>Select One</option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
						<div className='form-content'>
							<label htmlFor='tel'>
								Phone Number
							</label>
							<br />
							<input type='tel' name='tel'  placeholder="Enter Phone Number"/>
						</div>
						<div className='form-content'>
							<label htmlFor='email'>Email</label>
							<br />
							<input type='email' name='email' placeholder="Enter Email"/>
						</div>
						<div className='form-content'>
							<label htmlFor='password'>
								Password{' '}
							</label>
							<br />
							<input
								type='password'
								name='password'
								placeholder="Enter Password"
							/>
						</div>
					</form>
					<Link to='seller'>
						<div className='signup-green'>
							<GreenButton customLabel='Sign Up' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
