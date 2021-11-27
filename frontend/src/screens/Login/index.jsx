import React from 'react';
import './styles.css';
import { Logo } from '../../themes';
import {GreenButton} from '../../components/Buttons'
import { Link } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
const Login = () => {
	return (
		<div className='login-container'>
			<div className="errorpage">
				<ErrorPage />
			</div>
			<div className='login-content-container'>
				<img src={Logo.Asset_default_logo} alt='logo' />
				<h1>Welcome to Farm Hero</h1>
				<p>
					<Link to='/signup'>
						<span className='span-login'>Sign Up</span>
					</Link>{' '}
					Now
				</p>
				<div className='form-content-container'>
					<form>
						<div className='form-content'>
							<label htmlFor='email'>E-mail</label>
							<br />
							<input type='email' name='email'  placeholder="Enter Email"/>
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
					<Link to='/seller/'>
						<div className='login-green'>
							<GreenButton customLabel='Login' />
						</div>
					</Link>
					<Link to='/reset-pass'>
						<p className='forget-password'>
							Did you forget your password?
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
