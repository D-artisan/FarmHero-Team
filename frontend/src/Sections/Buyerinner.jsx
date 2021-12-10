import React, { useState } from 'react'
import { productImages, sellerImages,generalIcons } from '../themes';
import BuyerSidebar from '../components/Buyer/Marketplace-sidebar';
// import { Icon } from '@iconify/react';
// import downloadIcon from '@iconify/icons-ion/download';
// import documentText from '@iconify/icons-ion/document-text';
import { Navbar } from '../components/Marketplace/';
import axios from 'axios';
import GreenButton from '../components/Buttons/Green';




const BuyerInner = (props) => {
    const product = localStorage.getItem('productID')
    const [stockProducts, setStockProducts] = useState('')
    // console.log(product);

    axios({
        method: 'get',
        url: `/stocks/${product}/`       
    }).then(resp => {
        // console.log('product', resp);
        setStockProducts(resp.data)
    }).catch(err => {
        console.log('error', err);
    })
return(
<div className='marketdashboard-container'>
			<div className='buyerdashboard-container-header'>
				<BuyerSidebar marketclass='market-active' />
			</div>
			<div className='buyerdashboard-container-body'>
				<div className='dashboard-buyer'>
					<h2>Market</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardbuyer-content-container'>
					<div className='buyerdashboardsolid-containter'>
						{/* market-content-general */}
                        <div className='buyer-inner-content-container'>
							<div className='buyer-inner-content-header-style'>
								<div className='buyer-inner-content-header-grid'>
									<div className='buyer-inner-card'>
										<div className='bic-top'>
											<div className='bic-h3-cover'>
												<h3>
													Tuber
												</h3>
											</div>
											<img
												src={
													productImages.Cocoyam
												}
												alt='cocoyam'
											/>
										</div>
										<div className='add-bic-bottom'></div>
									</div>
									<div className='buyer-inner-card'>
										<div className='bic-top'>
											<div className='bic-h3-cover'>
												<h3>
													Vegetables
												</h3>
											</div>
											<img
												src={
													productImages.CashewNuts
												}
												alt='cocoyam'
											/>
										</div>
										<div className='bic-bottom'></div>
									</div>
									<div className='buyer-inner-card'>
										<div className='bic-top'>
											<div className='bic-h3-cover'>
												<h3>
													Fruits
												</h3>
											</div>
											<img
												src={
													productImages.Orange
												}
												alt='cocoyam'
											/>
										</div>
										<div className='add-bic-bottom'></div>
									</div>
									<div className='buyer-inner-card'>
										<div className='bic-top'>
											<div className='bic-h3-cover'>
												<h3>
													Grains{' '}
													{
														'&'
													}{' '}
													Cereals
												</h3>
											</div>
											<img
												src={
													productImages.Sorghum
												}
												alt='cocoyam'
											/>
										</div>
										<div className='add-bic-bottom'></div>
									</div>
								</div>
							</div>
							<div className='buyer-content-inner-general'>
								<div className='buyer-content-general-section-one'>
									{/* Type Filter */}
									<div className='market-general-card buyer-market-general-card'>
										<div className='market-card-header buyer-market-card-header'>
											<h3>
												Select
												Item
											</h3>
										</div>
										<div className='buyer-market-card-body'>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Carrot
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Cucumber
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Cabbage
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Garden
													Eggs
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Lettuce
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Okra
												</p>
												<img
													src={
														generalIcons.Asset_Arrow
													}
													alt='arrow'
												/>
											</div>
											<div className='buyer-market-body-content bmbc-flex'>
												<p>
													Onion
												</p>
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
								<div className='market-general-card inner-general-style'>
									<div className='market-card-header inner-style-decor'>
										<div className='inner-detail-style-left'>
											<div className='inner-style-image-container'>
												<img
													src={
														`http://localhost:8000${stockProducts.image}`
													}
													alt=''
												/>
											</div>
											<div className='inner-style-image-content'>
												<h3>
													{stockProducts.pro_name}
												</h3>
												<p>
													Lorem
													ipsum,
													dolor
													sit
													amet
													consectetur
													adipisicing
													elit.
												</p>
												<p>
													Lorem
													ipsum,
													dolor
													sit
													amet
												</p>
											</div>
										</div>
										<div className='inner-detail-style-right'>
											<div className='bucontchanger'>
												<div className='buyer-market-body-content idiotttttt'>
													<p>
														Price
														Filter:{' '}
													</p>
													<select
														name=''
														id=''
													>
														<option
															disabled
															selected
															hidden
														>
															Min
														</option>
													</select>
													<p>
														{' '}
														-
													</p>
													<select
														name=''
														id=''
													>
														{' '}
														<option
															disabled
															selected
															hidden
														>
															Max
														</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className='buyer-card-body'>
										<div className='buyer-card-body-grid'>
											<div>
												<div className='buyer-card-form-style'>
													<label htmlFor='cardType'>
														Quantity
													</label>
													<br />
													<select className='buyer-card-form-style-select'>
														<option
															disabled
															selected
															hidden
														>
															Select
															Quantity
														</option>
														<option>
															1
															ton
														</option>
														<option>
															2
															ton
														</option>
														<option>
															3
															ton
														</option>
													</select>
												</div>
												<div className='buyer-card-form-style'>
													<label htmlFor='cardType'>
														Delivery
														Location
													</label>
													<br />
													<select className='buyer-card-form-style-select'>
														<option
															disabled
															selected
															hidden
														>
															Select
															Quantity
														</option>
														<option>
															1
															ton
														</option>
														<option>
															2
															ton
														</option>
														<option>
															3
															ton
														</option>
													</select>
												</div>
											</div>
											<div className='buyer-link'>
												<img
													src={
														sellerImages.Asset_More
													}
													alt=''
												/>
											</div>
											<div>
												<div className='buyer-card-form-style'>
													<label htmlFor='cardType'>
														Cost
													</label>
													<br />
													<input
														className='buyer-card-form-style-select'
														type='number'
														name=''
														id=''
														placeholder='Enter Cost'
													/>
												</div>
												<div className='buyer-card-form-style'>
													<label htmlFor='cardType'>
														Delivery
														Location
													</label>
													<br />
													<input
														className='buyer-card-form-style-select'
														type='date'
														name=''
														id=''
													/>
												</div>
											</div>
										</div>
										<div className='total-price-button'>
											<div className='by-total'>
												<p>
													Total
												</p>
												<span>
													ghc
												</span>
											</div>
											<div>
											<GreenButton
												customLabel='Buy'
												customStyle={{
													marginLeft:
														'60px',
												}}
											/>
											</div>
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
	
	)
}

export default BuyerInner