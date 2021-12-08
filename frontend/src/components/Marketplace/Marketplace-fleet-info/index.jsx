import React from 'react';
import { fleetIcons, generalIcons, productImages } from '../../../themes';
import MarketplaceSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';
import './styles.css';

const FleetInfo = () => {
	
	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<MarketplaceSidebar fleetclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-fleetinfo'>
					<h2>Fleet</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardfleetinfo-content-container'>
					<div className='dashboardsolid-containter'>
						<p className='delivery-p'>
							Delivery Information{' '}
						</p>
						<div className='fli-section-one'>
							<div className='fli-section-one-left'>
								<div className='fli-icon-content'>
									<div className='fli-icon-container'>
										<h3>25%</h3>
										<p>complete</p>
									</div>
								</div>
								<div className='fli-detail-content'>
									<h3>Delivery Progress</h3>
								</div>
							</div>
							<div className='fli-section-one-left'>
								<div className='fli-icon-content'>
									<img
										src={
											fleetIcons.Asset_Car_Twelve
										}
										alt='fleet-car'
									/>
									<h3 className='fli-text-special'>
										Bongo Truck
									</h3>
								</div>
								<div className='fli-detail-content'>
									<p>
										No Plate:{' '}
										<span>
											AR122011
										</span>
									</p>
									<p>
										Colour:{' '}
										<span>
											Green {'&'}{' '}
											White
										</span>
									</p>
									<p>
										Driver:{' '}
										<span>
											Kwesi Osei
											Buabeng
										</span>
									</p>
									<p>
										Contact:{' '}
										<span>
											024 xxx xxxx
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className='fli-section-two'>
							<p>Order Information</p>
							<div className='fli-section-two-info-container'>
								<div className='fli-two-container-left'>
									<div className='fli-two-image-container'>
										<img
											src={
												productImages.Yam
											}
											alt='product'
										/>
									</div>
									<h3>Yam (Pona)</h3>
								</div>
								<div className='fli-two-container-right'>
									<div className='fli-two-inner'>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														generalIcons.Asset_Cedi
													}
													alt='cedi'
												/>
												<h3>
													GHC
													7000
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Amount
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														generalIcons.Asset_Calender
													}
													alt='cedi'
												/>
												<h3>
													27/01/2021
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Delivery
													Date
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														generalIcons.Asset_Market2
													}
													alt='cedi'
												/>
												<h3>
													2mgtonnes
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Quantity
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														generalIcons.Asset_Clock
													}
													alt='cedi'
												/>
												<h3>
													5:00pm
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Time
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														generalIcons.Asset_Location
													}
													alt='cedi'
												/>
												<h3>
													Accra
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Delivery
													Location
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														fleetIcons.Asset_Car_Three
													}
													alt='cedi'
												/>
												<h3>
													Daniel
													Agyekum
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Buyer
												</h3>
											</div>
										</div>
										<div className='fli-two-card'>
											<div className='fli-card-two-header'>
												<img
													src={
														fleetIcons.Asset_Car_Two
													}
													alt='cedi'
												/>
												<h3>
													#00111
												</h3>
											</div>
											<div className='fli-card-two-body'>
												<h3>
													Order ID
												</h3>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FleetInfo;
