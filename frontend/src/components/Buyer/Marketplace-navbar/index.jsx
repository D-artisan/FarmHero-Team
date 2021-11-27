import React, { useEffect, useState } from 'react';
import { generalIcons } from '../../../themes'
import { Dropdown } from '../../../Cards'
import './styles.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [dropdownActive, setDropdownActive] = useState(false);
	const [dropdowntwoActive, setDropdownTwoActive] = useState(false);

	const showDropdown = () => {
		setDropdownActive(!dropdownActive);
		

	};

	const showDropdowntwo = () => {
		
		setDropdownTwoActive(!dropdowntwoActive);
	};
	
	useEffect(() => {
		const dropdown = document.querySelector(
			'.navbar-dropdown-container',
		);
		const dropdowntwo = document.querySelector(
			'.navbar-notification-dropdown-container',
		);
		dropdownActive
			? (dropdown.style.display = 'block')
			: (dropdown.style.display = 'none');

		dropdowntwoActive
			? (dropdowntwo.style.display = 'block')
			: (dropdowntwo.style.display = 'none');
	}, [dropdownActive, dropdowntwoActive]);
      return (
		<div className='navbar-container'>
			<div className='navbar-content'>
				<div
					className='navbar-notification'
					onClick={showDropdowntwo}
					style={{ cursor: 'pointer' }}
				>
					<div className='notifier'>{'1'}</div>
					<img
						src={generalIcons.Asset_Notification}
						alt='notification'
					/>
				</div>
				<div className='navbar-notification-dropdown-container'>
					<Dropdown
						customStyle={{
							position: 'absolute',
							width: '300px',
							paddingLeft: '15px',
						}}
						customHeader={'Notification'}
						customData={['lorem is a good boy ']}
					/>
				</div>
				<div className='navbar-profile'>
					<img
						src={generalIcons.Asset_Profile}
						alt='profile'
					/>
				</div>
				<div
					className='navbar-dropdown'
					onClick={showDropdown}
					style={{ cursor: 'pointer' }}
				>
					<img
						src={generalIcons.Asset_Arrow}
						alt='dropdown'
					/>
				</div>
				<div className='navbar-dropdown-container'>
					<Dropdown
						customStyle={{
							position: 'absolute',
							width: '150px',
							paddingLeft: '15px',
						}}
						customData={[
							<Link to='/seller/marketplace/profile'>
								Profile
							</Link>,
							'Setting',
							'Logout',
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar