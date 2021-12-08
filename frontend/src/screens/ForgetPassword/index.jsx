import React from 'react';
import './styles.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
	return (
		<div className='forgetpass-container'>
			<div className='forgetpass-content-container'>
				<img src={Logo.Asset_default_logo} alt='logo' />
				<h1>New Password</h1>
				<div className='forrm-content-container'>
					<form>
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
						<div className='form-content'>
							<label htmlFor='password'>
								Confirm Password{' '}
							</label>
							<br />
							<input
								type='password'
								name='password'
								placeholder="Confirm Password"
							/>
						</div>
					</form>
					<Link to='seller'>
						<div className='forgetpass-green'>
							<GreenButton
								customLabel='Reset Password'
								customStyle={{ width: '150%' }}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
