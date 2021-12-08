import React, {useEffect, useState} from 'react';
import { fleetIcons, generalIcons, sellerImages } from '../../../themes';
import BuyerSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';
import './styles.css';
import { Dropdown } from '../../../Cards';
import { Link } from 'react-router-dom';


const BuyerFleet = () => {
	const [dropdownActive, setDropdownActive] = useState(false)
	const showDropdown = () => {
		setDropdownActive(!dropdownActive)
	}
	useEffect(() => {
		const dropdown = document.querySelector(
			'.shipment-dropdown-container',
		);
		dropdownActive
			? (dropdown.style.display = 'block')
			: (dropdown.style.display = 'none');
	}, [ dropdownActive]);
	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<BuyerSidebar fleetclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-fleet'>
					<h2>Fleet</h2>
					<div className='after-fleet-h2'>
						<p
							onClick={showDropdown}
							style={{ cursor: 'pointer' }}
						>
							All Shipment{' '}
						</p>
						<img
							src={generalIcons.Asset_Arrow}
							alt='arrow'
						/>
						<div className='shipment-dropdown-container'>
							<Dropdown
								customStyle={{
									marginTop: '25px',
									position: 'absolute',
									width: '150px',
									paddingLeft: '15px',
								}}
								customData={[
									'All Shipment',
									'Ready',
									'Active',
									'Completed',
								]}
							/>
						</div>
					</div>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardfleet-content-container'>
					<div className='dashboardsolid-containter'>
						<Link to='/seller/marketplace/fleetinfo'>
							<div className='fleet-container'>
								<div className='fleet-tracking'>
									<div className='fleet-tracking-header'>
										<p>
											<span>
												Tracking
												number
											</span>{' '}
											. In transit
										</p>
									</div>
									<div className='fleet-tracking-body'>
										<div className='fleet-tracking-icon'>
											<img
												src={
													fleetIcons.Asset_Car_One
												}
												alt='fleetcar'
											/>
										</div>
										<div className='fleet-tracking-load ftfirst'></div>
										<div className='fleet-tracking-load'></div>
										<div className='fleet-tracking-load'></div>
										<div className='fleet-tracking-load'></div>
									</div>
								</div>
								<div className='fleet-location'>
									<div className='fleet-location-header'>
										<img
											src={
												generalIcons.Asset_Location
											}
											alt='location'
										/>
										<p>
											Bolgatanga,
											Upper East
										</p>
									</div>
									<div className='fleet-location-body'>
										<p>
											Carrot [Long
											Red]
										</p>
									</div>
								</div>
								<div className='fleet-position'>
									<div className='fleet-position-header'>
										<img
											src={
												sellerImages.Asset_More
											}
											alt='location'
										/>
										<p>
											Accra, Greater
											Accra
										</p>
									</div>
									<div className='fleet-position-body'>
										<img
											src={
												generalIcons.Asset_Calender
											}
											alt='data'
										/>
										<p>
											Today,
											22/07/2022
										</p>
									</div>
								</div>
								<div className='fleet-fee'>
									<h3>GHC 7000.00</h3>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BuyerFleet;





