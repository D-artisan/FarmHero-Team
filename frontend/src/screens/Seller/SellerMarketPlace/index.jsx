import React from 'react';
import { Route, Switch } from 'react-router';
import { InventoryAddCard } from '../../../Cards';
import {
	MarketPlaceDashboard,
	MarketPlaceMarket,
	MarketPlaceInventory,
	MarketPlaceFleet,
	MarketPlaceInventoryList,
	MarketPlaceTransaction,
	ProfilePage,
	FleetInfo,
} from '../../../components';
import './styles.css';

const SellerMarketPlace = () => {
	return (
		<div className='sellermarketplace-container'>
			<Switch>
				<div className='sellermarketplace-container-header'>
					<Route
						path='/seller/marketplace'
						exact
						component={MarketPlaceDashboard}
					/>
					<Route
						path='/seller/marketplace/market'
						exact
						component={MarketPlaceMarket}
					/>
					<Route
						path='/seller/marketplace/inventory'
						exact
						component={MarketPlaceInventory}
					/>
					<Route
						path='/seller/marketplace/fleet'
						exact
						component={MarketPlaceFleet}
					/>
					<Route
						path='/seller/marketplace/inventorylist'
						exact
						component={MarketPlaceInventoryList}
					/>
					<Route
						path='/seller/marketplace/transaction'
						exact
						component={MarketPlaceTransaction}
					/>
					<Route
						path='/seller/marketplace/addcard'
						exact
						component={InventoryAddCard}
					/>
					<Route
						path='/seller/marketplace/profile'
						exact
						component={ProfilePage}
					/>
					<Route
						path='/seller/marketplace/fleetinfo'
						exact
						component={FleetInfo}
					/>
				</div>
			</Switch>
		</div>
	);
};

export default SellerMarketPlace;
