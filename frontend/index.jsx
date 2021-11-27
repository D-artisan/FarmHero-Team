import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../themes';
// import { PersonIcon, BusinessIcon, HomeIcon } from '@mui/icons-material';
import './styles.css';

const SideBar = ({ personalclass, companyclass, addressclass }) => {
	const personalSelected = () => {
		document.querySelector('.toggle-one').classList.add('active');
		document.querySelector('.toggle-two').classList.remove('active');
		document.querySelector('.toggle-four').classList.remove('active');
	};
	const companySelected = () => {
		document.querySelector('.toggle-one').classList.remove('active');
		document.querySelector('.toggle-two').classList.add('active');
		document.querySelector('.toggle-four').classList.remove('active');
	};
	
	const addressSelected = () => {
		document.querySelector('.toggle-one').classList.remove('active');
		document.querySelector('.toggle-two').classList.remove('active');
		document.querySelector('.toggle-four').classList.add('active');
	};
	return (
		<div className='sidebar-container'>
			<div className='sidebar-logo-container'>
				<img src={Logo.Asset_white_logo} alt='logo' />
			</div>
			<div className='sidebar-content-container'>
				<ul className='sidebar-content-list'>
					<h3>Get Started...</h3>
					{/* <hr /> */}
					<Link to='/seller' onClick={personalSelected}>
						<li
							className={`toggle-one ${personalclass}`}
						>
							  
							{/* <PersonIcon /> */}
							Pernsonal Info
						</li>
					</Link>
					<Link
						to='/seller/company'
						onClick={companySelected}
					>
						<li
							className={`toggle-two ${companyclass}`}
						>
							{/* <BusinessIcon /> */}
							Company Info
						</li>
					</Link>
					<Link
						to='/seller/address'
						onClick={addressSelected}
					>
						<li
							className={`toggle-four ${addressclass}`}
						>
							{/* <HomeIcon /> */}
							Address
						</li>
					</Link>
				</ul>
			</div>
			<div className='sidebar-signout'>
				<Link to='/'>
					<span>Sign Out</span>
				</Link>
			</div>
		</div>
	);
};

export default SideBar;
