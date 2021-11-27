import React from 'react';
import './styless.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';

const ResetPassword = () => {

	return (
		<div className='resetpass-container'>
			{/* Forget passoword side */}
			<div className='resetpass-content-container'>
				<Link to='/'>
				<img src={Logo.Asset_default_logo} alt='logo' />
				</Link>
				<h1>Forgot Password?</h1>
				<p>
					Please enter your email address and we will send
					you a link to reset your password.
				</p>
				<div className='forrrm-content-container'>
					<form>
						<div className='form-content'>
							<label htmlFor='email'>E-mail </label>
							<br />
							<input
								type='email'
								name='email'
								placeholder='e.g. Timo@farmhero.com'
							/>
						</div>
					</form>
					<Link to='/verification'>
						<div className='resetpass-green'>
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

export default ResetPassword;
