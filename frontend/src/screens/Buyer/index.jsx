import React from 'react';
import { Route, Switch } from 'react-router';
import './styles.css';
// import { InventoryAddCard } from '../../../Cards';
import {
	 BuyerDashboard,
	BuyerMarket,
	BuyerInventory,
	BuyerFleet,
	BuyerInventoryList,
	BuyerTransaction,
	ProfilePage,
	BuyerFleetInfo,
} from '../../components';
import BuyerInner from '../../Sections/Buyerinner';

const Buyer = () => {
	return (
		<div className='buyermarketplace-container'>
			<Switch>
				<div className='buyermarketplace-container-header'>
					<Route
						path='/buyer/'
						exact
						component={BuyerDashboard}
					/>
					<Route
						path='/buyer/market'
						exact
						component={BuyerMarket}
					/>
					<Route
						path='/buyer/inventory'
						exact
						component={BuyerInventory}
					/>
					<Route
						path='/buyer/fleet'
						exact
						component={BuyerFleet}
					/>
					<Route
						path='/buyer/inventorylist'
						exact
						component={BuyerInventoryList}
					/>
					<Route
						path='/buyer/transaction'
						exact
						component={BuyerTransaction}
					/>
					{/* <Route
						path='/buyer/addcard'
						exact
						component={InventoryAddCard}
					/> */}
					<Route
						path='/buyer/profile'
						exact
						component={ProfilePage}
					/>
					<Route
						path='/buyer/fleetinfo'
						exact
						component={BuyerFleetInfo}
					/>
					<Route
						path='/buyer/buyerinner'
						exact
						component={BuyerInner}
					/>
				</div>
			</Switch>
		</div>
	);
};

export default Buyer;
