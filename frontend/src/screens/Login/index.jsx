import React, {useState} from 'react';
import './styles.css';
import { Logo } from '../../themes';
import { GreenButton } from '../../components/Buttons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ErrorPage } from '../../components';
import { useHistory } from 'react-router';

const Login = () => {
	const history = useHistory()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signUpText, setSignUpText] = useState('Login');
	const [errorText, setErrorText] = useState('');
	const [checked, setChecked] = useState(false)

	const validate = () => {
		const data = {
			email: email,
			password: password,
			user_type: checked ? 'SELLER' : 'BUYER'
		};
		setSignUpText(
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className='rotate'></div>
			</div>,
		);
		console.log(data);

		axios({
			method: 'post',
			url: `/login`,
			data: data,
		})
			.then(res => {
				setSignUpText('Login')
				if (res.statusText === "OK") {
					localStorage.setItem(
						'token',
						res.data.jwt,
					);
					if (res.data.user_type === "SELLER") {
						history.push({
							pathname: '/seller'
						})
					}else if (res.data.user_type === "BUYER") {
						history.push({
							pathname: '/buyer'
						})
					}
					console.log('res');

				}
				console.log(res);

			})
			.catch(err => {
				console.log(err.response);
				setSignUpText('Login');
						setTimeout(() => {
							setErrorText('');
						}, 10000);
						//handle error
						setErrorText(err.response.data.detail);
			});
			setErrorText('')
	};

	return (
		<div className='login-container'>
			{errorText ? <ErrorPage text={errorText}/> : ''}
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
							<input
								type='email'
								name='email'
								value={email}
								onChange={e =>
									setEmail(e.target.value)
								}
								placeholder='Enter Email'
								required
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
								required
							/>
						</div>
						<div className='seller-buyer-checkbox'>
						<p>
												Kindly tick this box if you're a seller
											</p>
											<input
												type='checkbox'
												name='radio'
												id=''
												value={checked}
												onClick={e => setChecked(e.target.checked)}
											/>
											
										</div>
					</form>
					
						<div className='login-green' onClick={validate}>
							<GreenButton customLabel={signUpText} />
						</div>
				
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
