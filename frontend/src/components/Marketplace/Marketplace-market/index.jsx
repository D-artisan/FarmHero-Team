import React, {useState, useEffect} from 'react';
import { sellerImages } from '../../../themes';
import MarketplaceSidebar from '../Marketplace-sidebar';
import { generalIcons } from '../../../themes';
// import { Icon } from '@iconify/react';
// import downloadIcon from '@iconify/icons-ion/download';
// import documentText from '@iconify/icons-ion/document-text';
import { Navbar } from '..';
import './styles.css';
import { MarketCard } from '../../../Cards';
import axios from 'axios';


const MarketPlaceMarket = () => {
	const [marketProduct, setMarketProduct] = useState([])
	const [graphData, setGraphData] = useState([])
	useEffect(() => {
		try{
			async function getData() {
				const { data } = await axios.get('/stocks/');
				setMarketProduct(data);
				console.log('data',data);
			}
			getData();
		} catch(error){
			console.log(error.response);
		}
	}, []);

	useEffect(() => {
		marketProduct.map(product => (
			setGraphData(product.pro_name)
		))
	}, [marketProduct])

	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<MarketplaceSidebar marketclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-market'>
					<h2>Market</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardmarket-content-container'>
					<div className='dashboardsolid-containter'>
						{/* market-content-general */}
						<div className='market-content-general'>
							<div className='market-general-card'>
								<div className='market-card-header'>
									<h3>Incoming Orders</h3>
									<p>...</p>
								</div>
								<div className='market-card-body'>
									<h3>21</h3>
									<div className='market-card-icon'>
										<img
											src={
												sellerImages.Asset_More
											}
											alt='more'
										/>
									</div>
								</div>
							</div>
							<div className='market-general-card'>
								<div className='market-card-header'>
									<h3>Pending Orders</h3>
									<p>...</p>
								</div>
								<div className='market-card-body'>
									<h3>12</h3>
									<div className='market-card-icon'>
										<img
											src={
												sellerImages.Asset_Loader
											}
											alt='loader'
										/>
									</div>
								</div>
							</div>
							<div className='market-general-card'>
								<div className='market-card-header'>
									<h3>Total Orders</h3>
									<p>...</p>
								</div>
								<div className='market-card-body'>
									<h3>33</h3>
									<div className='market-card-icon'>
										<img
											src={
												sellerImages.Asset_File
											}
											alt='loader'
										/>
									</div>
								</div>
							</div>
						</div>
						{/* market-content-graph */}
						<div className='market-content-graph'>
							<div className='market-graph-header'>
								<h3>What's Moving Market</h3>
								<div className='market-graph'>
									
								</div>
							</div>
						</div>
						{/*market-content-prices */}
						<div className='transaction-dashboard-body'>
							<h3 className='market-improvise'>
								Market Prices
							</h3>
							<div className='transaction-dashboard-body-header'>
								<div className='transaction-body-header'>
									<div className='transaction-body-header-inner'>
										<p>Show</p>
										<select
											name=''
											id=''
										>
											<option
												selected
												disabled
												hidden
											>
												{' '}
												5
											</option>
										</select>
										<p>entries</p>
									</div>
									<div className='inner-second'>
										<div className='dashboard-transaction-right'>
											<input
												type='search'
												name=''
												id=''
												placeholder='Search...'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='transaction-dashboard-body-body'>
								<div className='transaction-contents'>
									<div className='hrderd'>
										<div className='transaction-dashboard-body-body-contents '>
											<div className='transaction-body-content'>
												<h3>
													Date
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Item
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Unit
													Price
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Per
													KG
													(Kilos)
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Per
													MG
													(tonnes)
												</h3>
											</div>
										</div>
									</div>
								</div>

								{marketProduct.map(product => (
									<MarketCard
										key={product._id}
										product={product}
									/>
								))}

								{/* paste here */}
							</div>
							<div className='transaction-dashboard-body-header'>
								<div className='transaction-body-header'>
									<div className='transaction-body-header-inner'>
										<h3>
											Showing 1 to 5
											0f 10 entries
										</h3>
									</div>
									<div className='transaction-bottom'>
										<div className='transaction-bottom-right'>
											<img
												src={
													generalIcons.Asset_Arrow
												}
												className='icon-less'
												alt='icon-less'
											/>
											<div className='tr-span-content'>
												<div className='tr-span-one span-one-active'>
													<p className='span-one-active'>
														1
													</p>
												</div>
												<div className='tr-span-one '>
													<p>
														2
													</p>
												</div>
											</div>
											<img
												src={
													generalIcons.Asset_Arrow
												}
												className='icon-greater'
												alt='icon-greater'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* paste here */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default MarketPlaceMarket;



























// <div className='marketdashboardmarket-content-container'>



	
// </div>;