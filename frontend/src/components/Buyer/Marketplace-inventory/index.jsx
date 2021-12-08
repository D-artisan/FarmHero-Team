import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { InventoryAddCard } from '../../../Cards';
import BuyerSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';

import axios from 'axios';
import './styles.css';

const BuyerInventory = () => {
	// api calls
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		async function fetchStocks() {
			const { data } = await axios.get(
				'/api/stocks/',
			);
			setStocks(data);
		}
		console.log(stocks);

		fetchStocks();
	}, [stocks]);

	// display grid function
	// const assetGridFunction = () => {
	// 	document.querySelector('.inventorystyle').style.display = 'block';
	// 	document.querySelector('.inventoryliststyle').style.display =
	// 		'none';
	// 	console.log('hello');
	// };

	//display table funtion
	// const assetMenuFunction = () => {
	// 	document.querySelector('.inventoryliststyle').style.display =
	// 		'block';
	// 	document.querySelector('.inventorystyle').style.display = 'none';
	// 	console.log('hell');
	// };

	//delete checkbox
	// const deleteAllselected = () => {
	// 	document.querySelector('.icon-trassh').style.display = 'block';
	// };

	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<BuyerSidebar inventoryclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-inventory-one'>
					<h2>Report</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardinventory-content-container'>
					<div className='dashboardsolid-containter'>
						
						{/* paste here */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default BuyerInventory;
