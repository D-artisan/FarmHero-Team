import React from 'react';
import { Link } from 'react-router-dom';
import { generalIcons, Logo } from '../../../themes';
import './styles.css';

const BuyerSidebar = ({
	dashboardclass,
	marketclass,
	inventoryclass,
	transactionclass,
	fleetclass,
	helpclass
}) => {
	const DashboardSelected = () => {
		document.querySelector('.toggle-one').classList.add('market-active');
		document.querySelector('.toggle-two').classList.remove('market-active');
		document.querySelector('.toggle-three').classList.remove('market-active');
		document.querySelector('.toggle-four').classList.remove('market-active');
		document.querySelector('.toggle-five').classList.remove('market-active');
		document.querySelector('.toggle-six').classList.remove('market-active');

	};
	const MarketSelected = () => {
		document.querySelector('.toggle-one').classList.remove('market-active');
		document.querySelector('.toggle-two').classList.add('market-active');
		document.querySelector('.toggle-three').classList.remove('market-active');
		document.querySelector('.toggle-four').classList.remove('market-active');
		document.querySelector('.toggle-five').classList.remove('market-active');
		document.querySelector('.toggle-six').classList.remove('market-active');

	};

	const InventorySelected = () => {
		document.querySelector('.toggle-one').classList.remove('market-active');
		document.querySelector('.toggle-two').classList.remove('market-active');
		document.querySelector('.toggle-three').classList.add('market-active');
		document.querySelector('.toggle-four').classList.remove('market-active');
		document.querySelector('.toggle-six').classList.remove('market-active');
		document.querySelector('.toggle-five').classList.remove('market-active');
	};
	const TransactionSelected = () => {
		document.querySelector('.toggle-one').classList.remove('market-active');
		document.querySelector('.toggle-two').classList.remove('market-active');
		document.querySelector('.toggle-three').classList.remove('market-active');
		document.querySelector('.toggle-four').classList.add('market-active');
		document.querySelector('.toggle-five').classList.remove('market-active');
		document.querySelector('.toggle-six').classList.remove('market-active');

	};
	const FleetSelected = () => {
		document.querySelector('.toggle-one').classList.remove('market-active');
		document.querySelector('.toggle-two').classList.remove('market-active');
		document.querySelector('.toggle-three').classList.remove('market-active');
		document.querySelector('.toggle-four').classList.remove('market-active');
		document.querySelector('.toggle-five').classList.add('market-active');
		document.querySelector('.toggle-six').classList.remove('market-active');

	};
	const HelpSelected = () => {
		document.querySelector('.toggle-one').classList.remove('market-active');
		document.querySelector('.toggle-two').classList.remove('market-active');
		document.querySelector('.toggle-three').classList.remove('market-active');
		document.querySelector('.toggle-four').classList.remove('market-active');
		document.querySelector('.toggle-five').classList.remove('market-active');
		document.querySelector('.toggle-six').classList.add('market-active');

	};
	return (
		<div className='marketplacesidebar-container'>
			<div className='marketplacesidebar-logo-container'>
				<img src={Logo.Asset_white_logo} alt='logo' />
			</div>
			<div className='marketplacesidebar-content-container'>
				<ul className='marketplacesidebar-content-list'>
					<li className={`toggle-one ${dashboardclass}`}>
						<img
							src={generalIcons.Asset_SecondGrid}
							alt='dashboard'
						/>
						<Link
							to='/buyer/'
							onClick={DashboardSelected}
						>
							<span>Dashboard</span>
						</Link>
					</li>

					<li className={`toggle-two ${marketclass}`}>
						<img
							src={generalIcons.Asset_SecondCart}
							alt='market'
						/>
						<Link
							to='/buyer/market'
							onClick={MarketSelected}
						>
							<span>Market</span>
						</Link>
					</li>
					<li className={`toggle-four ${transactionclass}`}>
						<img
							src={generalIcons.Asset_Recycle}
							alt='market'
						/>
						<Link
							to='/buyer/transaction'
							onClick={TransactionSelected}
						>
							<span>Transaction</span>
						</Link>
					</li>
					<li className={`toggle-three ${inventoryclass}`}>
						<img
							src={generalIcons.Asset_Save}
							alt='market'
						/>
						<Link
							to='/buyer/inventory'
							onClick={InventorySelected}
						>
							<span>Report</span>
						</Link>
					</li>

					<li className={`toggle-five ${fleetclass}`}>
						<img
							src={generalIcons.Asset_Truck}
							alt='market'
						/>
						<Link
							to='/buyer/fleet'
							onClick={FleetSelected}
						>
							<span>Shipment</span>
						</Link>
					</li>
				</ul>
			</div>
			{/* <hr /> */}

			<div className='marketplacesidebar-signout'>
				<Link
					to='/seller/marketplace'
					onClick={HelpSelected}
					className={`toggle-six ${helpclass}`}
				>
					<img
						src={generalIcons.Asset_Setting}
						alt='market'
					/>
					<span>Help Center</span>
				</Link>
			</div>
		</div>
	);
};

export default BuyerSidebar;
