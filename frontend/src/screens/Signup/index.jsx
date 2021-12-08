import React, { useState } from 'react';
import './styles.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [serviceType, setServiceType] = useState('Select One');
	const [phoneNumber, setPhoneNumber] = useState('');

	const validate = () => {
		let usertype;
		if (serviceType == 'Buyer') {
			usertype = 'BUY'
		}else if (serviceType == 'Seller') {
			usertype = 'SELL';
		}

		const data = {
			email: email,
			password: password,
			user_type: usertype,
			phoneNumber: phoneNumber,
		};
			console.log(data);
		axios({
			method: 'post',
			url: `/register`,
			data: data,
		})
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.log(err.response);
			});
	};
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
							<select
								className='signup-select'
								value={serviceType}
								onChange={e =>
									setServiceType(
										e.target.value,
									)
								}
							>
								<option
									selected
									hidden
									disabled
								>
									Select One
								</option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
						<div className='form-content'>
							<label htmlFor='tel'>
								Phone Number
							</label>
							<br />
							<input
								type='tel'
								name='tel'
								placeholder='Enter Phone Number'
								value={phoneNumber}
								onChange={e =>
									setPhoneNumber(
										e.target.value,
									)
								}
							/>
						</div>
						<div className='form-content'>
							<label htmlFor='email'>Email</label>
							<br />
							<input
								type='email'
								name='email'
								placeholder='Enter Email'
								value={email}
								onChange={e =>
									setEmail(e.target.value)
								}
							/>
						</div>
						<div className='form-content'>
							<label htmlFor='password'>
								Password{' '}
							</label>
							<br />
							<input
								type='password'
								name='password'
								placeholder='Enter Password'
								value={password}
								onChange={e =>
									setPassword(
										e.target.value,
									)
								}
							/>
						</div>
					</form>

					<div className='signup-green' onClick={validate}>
						<GreenButton customLabel='Sign Up' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
