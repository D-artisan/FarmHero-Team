import React, {useState, useEffect} from 'react';
import {
	fleetIcons,
	generalIcons,
	sellerImages,
} from '../../../themes';
import BuyerSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';
// import './styles.css';
import axios from 'axios';
import { DashBoardMarketCard } from '../../../Cards';

const BuyerDashboard = () => {

	//api calls
	const [mstock, setMstock] = useState([])
	const [mar_product, setMarketproduct] = useState([]);


	// useEffect(() => {
	// 	async function fetchData() {
	// 		const {data} = await axios.get('/stocks')
	// 		setMstock(data)
	// 	}
	// 	fetchData()
	// }, [])

	useEffect(() => {
		const newData = mstock.slice(0, 5);
		setMarketproduct(newData);
	}, [mstock]);

	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<BuyerSidebar dashboardclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-welcome'>
					<div className='welcome-profile'>
						<div className='welcome-profile-image'>
							<img
								src={generalIcons.Asset_Profile}
								alt='pimage'
							/>
						</div>
					</div>
					<div className='welcome-content'>
						<div className='welcome-content-text'>
							<p>
								Goodmorning, <h2>Timo</h2>
							</p>
							<p className='overview'>
								{' '}
								Here is an overview of events
								today.
							</p>
						</div>
					</div>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>

				<div className='marketdashboard-content-container'>
					<div className='dashboardsolid-containter'>
						<div className='welcome-content-general'>
							<div className='general-card'>
								<div className='general-card-icon'>
									<div className='card-icon'>
										<img
											src={
												sellerImages.Asset_Bars
											}
											alt='sellerimages'
										/>
									</div>
								</div>
								<div className='general-card-content'>
									<div className='card-content'>
										<div className='card-header'>
											<p>
												This
												week
											</p>
											<h3>Sales</h3>
										</div>
										<div className='card-detail'>
											<img
												src={
													generalIcons.Asset_Cedi
												}
												alt='cedi'
											/>
											<h4>
												37,000
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className='general-card'>
								<div className='general-card-icon'>
									<div className='card-icon'>
										<img
											src={
												sellerImages.Asset_Bars
											}
											alt='sellerimages'
										/>
									</div>
								</div>
								<div className='general-card-content'>
									<div className='card-content'>
										<div className='card-header'>
											<p>
												Last
												Month
											</p>
											<h3>Sales</h3>
										</div>
										<div className='card-detail'>
											<img
												src={
													generalIcons.Asset_Cedi
												}
												alt='cedi'
											/>
											<h4>
												212,000
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className='general-card'>
								<div className='general-card-icon'>
									<div className='card-icon'>
										<img
											src={
												sellerImages.Asset_Cart
											}
											alt='sellerimages'
										/>
									</div>
								</div>
								<div className='general-card-content'>
									<div className='card-content'>
										<div className='card-header'>
											<p></p>
											<h3>
												Pending
												Orders
											</h3>
										</div>
										<div className='card-detail'>
											<p />
											<h4>21</h4>
										</div>
									</div>
								</div>
							</div>
							<div className='general-card'>
								<div className='general-card-icon'>
									<div className='card-icon'>
										<img
											src={
												sellerImages.Asset_Market
											}
											alt='sellerimages'
										/>
									</div>
								</div>
								<div className='general-card-content'>
									<div className='card-content'>
										<div className='card-header'>
											<p></p>
											<h3>Stock</h3>
										</div>
										<div className='card-detail'>
											<p />
											<h4>300mg</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='welcome-content-shipment'>
							<div className='shipment-header'>
								<h3 className='shipment-header-h3'>
									Shipment
								</h3>
								<p className='shipment-header-p'>
									See All{' '}
									<span className='shipment-arrow'>
										<img
											className='shipment-arrow-icon'
											src={
												generalIcons.Asset_Arrow
											}
											alt='arrow'
										/>
									</span>
								</p>
							</div>

							<div className='shipment-body'>
								<div className='shipment-body-flex'>
									<div className='shipment-body-flex-container'>
										<div className='shipment-body-flex-container-box'>
											<div className='shipment-flex-card'>
												<div className='shipment-card-detail'>
													<div className='space-one'></div>
													<div className='space-two'>
														<img
															src={
																fleetIcons.Asset_Car_Fifteen
															}
															alt='car'
														/>
														<h3>
															0axd0121f
														</h3>
													</div>
													<div className='space-three'>
														<p>
															View
														</p>
													</div>
												</div>
												<div className='shipment-card-location'>
													<p>
														Bolgatanga
														to
														Accra
													</p>
												</div>
											</div>
											<div className='shipment-flex-card'>
												<div className='shipment-card-detail'>
													<div className='space-one'></div>
													<div className='space-two'>
														<img
															src={
																fleetIcons.Asset_Car_Fifteen
															}
															alt='car'
														/>
														<h3>
															0axd0121f
														</h3>
													</div>
													<div className='space-three'>
														<p>
															View
														</p>
													</div>
												</div>
												<div className='shipment-card-location'>
													<p>
														Bolgatanga
														to
														Accra
													</p>
												</div>
											</div>
											<div className='shipment-flex-card'>
												<div className='shipment-card-detail'>
													<div className='space-one'></div>
													<div className='space-two'>
														<img
															src={
																fleetIcons.Asset_Car_Fifteen
															}
															alt='car'
														/>
														<h3>
															0axd0121f
														</h3>
													</div>
													<div className='space-three'>
														<p>
															View
														</p>
													</div>
												</div>
												<div className='shipment-card-location'>
													<p>
														Bolgatanga
														to
														Accra
													</p>
												</div>
											</div>
											<div className='shipment-flex-card'>
												<div className='shipment-card-detail'>
													<div className='space-one'></div>
													<div className='space-two'>
														<img
															src={
																fleetIcons.Asset_Car_Sixteen
															}
															alt='car'
														/>
														<h3>
															0axd0121f
														</h3>
													</div>
													<div className='space-three'>
														<p>
															View
														</p>
													</div>
												</div>
												<div className='shipment-card-location'>
													<p>
														Bolgatanga
														to
														Accra
													</p>
												</div>
											</div>

											<div className='shipment-flex-card'>
												<div className='shipment-card-detail'>
													<div className='space-one'></div>
													<div className='space-two'>
														<img
															src={
																fleetIcons.Asset_Car_Sixteen
															}
															alt='car'
														/>
														<h3>
															0axd0121f
														</h3>
													</div>
													<div className='space-three'>
														<p>
															View
														</p>
													</div>
												</div>
												<div className='shipment-card-location'>
													<p>
														Bolgatanga
														to
														Accra
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className='shipment-body-flex-arrow'>
										<img
											src={
												generalIcons.Asset_Arrow
											}
											alt='arrow'
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='welcome-content-transactions'>
							<div className='content-transaction-container'>
								<div className='transaction-container-header'>
									<h3 className='transaction-container-header-h3'>
										Transactions
									</h3>
									<p className='transaction-container-header-p'>
										View{' '}
										<span className='transaction-container-arrow'>
											<img
												className='transaction-container-arrow-icon'
												src={
													generalIcons.Asset_Arrow
												}
												alt='arrow'
											/>
										</span>
									</p>
								</div>
								<div className='transaction-container-detail'></div>
							</div>
							<div className='content-market-container'>
								<div className='transaction-container-header'>
									<h3 className='transaction-container-header-h3'>
										What's Moving Market
									</h3>
									<p className='transaction-container-header-p'>
										View{' '}
										<span className='transaction-container-arrow'>
											<img
												className='transaction-container-arrow-icon'
												src={
													generalIcons.Asset_Arrow
												}
												alt='arrow'
											/>
										</span>
									</p>
								</div>
								<div className='conent-market-details'>
									{mar_product.map(product=> (
										<DashBoardMarketCard key={product._id} product={product}/>
									))}
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
export default BuyerDashboard;
