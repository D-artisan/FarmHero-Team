import React from 'react';
import './styles.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';

const VerifyMail = () => {
	return (
		<div className='verify-container'>
			<div className='verify-content-container'>
				<Link to='/'>
					<img src={Logo.Asset_default_logo} alt='logo' />
				</Link>
				<h1>Verify your email</h1>
				<p>
					Use the link below to verify your email to
					continue...
				</p>
				<Link to='/forget-pass'>
					<div className='verify-content-green'>
						<GreenButton
							customLabel='Reset Password'
							customStyle={{ width: '140%' }}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default VerifyMail;
