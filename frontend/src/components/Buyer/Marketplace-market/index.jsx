import React, { useState, useEffect } from 'react';
import { productImages, sellerImages } from '../../../themes';
import BuyerSidebar from '../Marketplace-sidebar';
import { generalIcons } from '../../../themes';
// import { Icon } from '@iconify/react';
// import downloadIcon from '@iconify/icons-ion/download';
// import documentText from '@iconify/icons-ion/document-text';
import { Navbar } from '..';
import './styles.css';
import { BuyerCard } from '../../../Cards';
import axios from 'axios';
import GreenButton from '../../Buttons/Green';

const BuyerMarket = () => {
	const [marketProduct, setMarketProduct] = useState([]);
	const [graphData, setGraphData] = useState([]);

	useEffect(() => {
		async function getData() {
			const { data } = await axios.get('/api/stocks');
			setMarketProduct(data);
		}
		console.log(graphData);
		getData();
	}, [graphData]);

	useEffect(() => {
		marketProduct.map(product => setGraphData(product.pro_name));
	}, [marketProduct]);

	const hiddenFunc = () => {
		document.querySelector('.buyer-content-general').style.display =
			'none';
		document.querySelector(
			'.buyer-inner-content-container',
		).style.display = 'block';
	};

	return (
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
						<div className='buyer-content-general'>
							<div className='buyer-content-general-section-one'>
								{/* Type Filter */}
								<div className='market-general-card buyer-market-general-card'>
									<div className='market-card-header buyer-market-card-header'>
										<h3>Type Filter</h3>
									</div>
									<div className='buyer-market-card-body'>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='radio'
												id=''
											/>
											<p>
												Perishable
											</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='radio'
												id=''
											/>
											<p>
												Non-Perishable
											</p>
										</div>
									</div>
								</div>
								{/* Category Filter */}
								<div className='market-general-card buyer-market-general-card'>
									<div className='market-card-header buyer-market-card-header'>
										<h3>
											Category
											Filter
										</h3>
									</div>
									<div className='buyer-market-card-body'>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='category'
												id=''
											/>
											<p>Tubers</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='category'
												id=''
											/>
											<p>
												Vegetable
											</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='category'
												id=''
											/>
											<p>Fruits</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='category'
												id=''
											/>
											<p>
												Grains
												and
												Cereals
											</p>
										</div>
									</div>
								</div>
								{/* Price Filter */}
								<div className='market-general-card buyer-market-general-card'>
									<div className='market-card-header buyer-market-card-header'>
										<h3>
											Price Filter
										</h3>
										<p>Per kg/mg</p>
									</div>
									<div className='buyer-market-card-body'>
										<div className='bucontchanger'>
											<div className='buyer-market-body-content idiotttttt'>
												<select
													name=''
													id=''
												></select>
												<p>
													{' '}
													-
												</p>
												<select
													name=''
													id=''
												></select>
											</div>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='price'
												id=''
											/>
											<p>
												Under
												1000ghc
											</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='price'
												id=''
											/>
											<p>
												1000 to
												5000ghc
											</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='price'
												id=''
											/>
											<p>
												5000 to
												10000ghc
											</p>
										</div>
										<div className='buyer-market-body-content'>
											<input
												type='radio'
												name='price'
												id=''
											/>
											<p>
												10000ghc{' '}
												{'&'}{' '}
												above
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='market-general-card'>
								<div className='market-card-header'>
									<h3> </h3>
									<div className='buyersecond-header'>
										<h3>Sort by:</h3>
										<p>Price</p>
										<p className='phrer'>
											Best Match
										</p>
										<p className='phrer'>
											Recommended
										</p>
									</div>
								</div>
								<div className='buyer-card-body'>
									<div className='buyer-card-body-grid'>
										<div
											className='inventory-detail-card buyer-market-card'
											onClick={
												hiddenFunc
											}
										>
											<div className='inventory-detail-card-header'>
												{/* <div className='inventory-detail-card-header-header'>
													<p>Edit</p>
													<p>x</p>
												</div> */}
												<img
													src={
														productImages.Maize
													}
													alt='maize'
												/>
											</div>
											<div className='inventory-detail-card-body'>
												<div className='inventory-detail-card-body-header'>
													<h3>
														{
															'Maize'
														}
													</h3>
													{/* <div className='card-header-icon'></div> */}
												</div>
												<div className='inventory-detail-card-body-detail'>
													<div className='card-body-top'>
														<p className='headinginv'>
															Price:
														</p>
														<p>
															{
																'12.00'
															}{' '}
															ghc
														</p>
													</div>
													<div className='card-body-top'>
														{/* <p className='headinginv'>Exp Date:</p> */}
														{/* <p>{product.date}</p> */}
													</div>
												</div>
											</div>
										</div>
										<div
											className='inventory-detail-card buyer-market-card'
											onClick={
												hiddenFunc
											}
										>
											<div className='inventory-detail-card-header'>
												{/* <div className='inventory-detail-card-header-header'>
													<p>Edit</p>
													<p>x</p>
												</div> */}
												<img
													src={
														productImages.Maize
													}
													alt='maize'
												/>
											</div>
											<div className='inventory-detail-card-body'>
												<div className='inventory-detail-card-body-header'>
													<h3>
														{
															'Maize'
														}
													</h3>
													{/* <div className='card-header-icon'></div> */}
												</div>
												<div className='inventory-detail-card-body-detail'>
													<div className='card-body-top'>
														<p className='headinginv'>
															Price:
														</p>
														<p>
															{
																'12.00'
															}{' '}
															ghc
														</p>
													</div>
													<div className='card-body-top'>
														{/* <p className='headinginv'>Exp Date:</p> */}
														{/* <p>{product.date}</p> */}
													</div>
												</div>
											</div>
										</div>
										<div
											className='inventory-detail-card buyer-market-card'
											onClick={
												hiddenFunc
											}
										>
											<div className='inventory-detail-card-header'>
												{/* <div className='inventory-detail-card-header-header'>
													<p>Edit</p>
													<p>x</p>
												</div> */}
												<img
													src={
														productImages.Maize
													}
													alt='maize'
												/>
											</div>
											<div className='inventory-detail-card-body'>
												<div className='inventory-detail-card-body-header'>
													<h3>
														{
															'Maize'
														}
													</h3>
													{/* <div className='card-header-icon'></div> */}
												</div>
												<div className='inventory-detail-card-body-detail'>
													<div className='card-body-top'>
														<p className='headinginv'>
															Price:
														</p>
														<p>
															{
																'12.00'
															}{' '}
															ghc
														</p>
													</div>
													<div className='card-body-top'>
														{/* <p className='headinginv'>Exp Date:</p> */}
														{/* <p>{product.date}</p> */}
													</div>
												</div>
											</div>
										</div>
										<div
											className='inventory-detail-card buyer-market-card'
											onClick={
												hiddenFunc
											}
										>
											<div className='inventory-detail-card-header'>
												{/* <div className='inventory-detail-card-header-header'>
													<p>Edit</p>
													<p>x</p>
												</div> */}
												<img
													src={
														productImages.Maize
													}
													alt='maize'
												/>
											</div>
											<div className='inventory-detail-card-body'>
												<div className='inventory-detail-card-body-header'>
													<h3>
														{
															'Maize'
														}
													</h3>
													{/* <div className='card-header-icon'></div> */}
												</div>
												<div className='inventory-detail-card-body-detail'>
													<div className='card-body-top'>
														<p className='headinginv'>
															Price:
														</p>
														<p>
															{
																'12.00'
															}{' '}
															ghc
														</p>
													</div>
													<div className='card-body-top'>
														{/* <p className='headinginv'>Exp Date:</p> */}
														{/* <p>{product.date}</p> */}
													</div>
												</div>
											</div>
										</div>
										{/*dummy ends here*/}
									</div>
								</div>
							</div>
						</div>
						{/* market-content-graph */}
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
														productImages.Orange
													}
													alt=''
												/>
											</div>
											<div className='inner-style-image-content'>
												<h3>
													Long
													Red
													carrot
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
						{/*market-content-prices */}
						<div className='buyer-plenty-cards-sides'>
							<div className='bpcs-container'>
								<div className='bpcsc-header'>
									<img
										src={
											generalIcons.Asset_Close
										}
										alt='close'
									/>
								</div>
								<div className='bpcsc-section-one'>
									<h3>
										Payment {'&'}{' '}
										Confirmation
									</h3>
								</div>
								<div className='bpcsc-section-two'>
									<p>
										Choose Payment
										Option
									</p>
									<div className='bpcsc-section-two-inner'>
										<div className='bpcsc-grid'>
											<img
												src={
													sellerImages.Asset_Card
												}
												alt='card'
											/>
											<h3>
												Card
												Payment
											</h3>
										</div>
										<div className='bpcsc-grid'>
											<img
												src={
													sellerImages.Asset_Court
												}
												alt='card'
											/>
											<h3>
												Bank
												Transfer
											</h3>
										</div>
										<div className='bpcsc-grid'>
											<img
												src={
													sellerImages.Asset_Transact
												}
												alt='card'
											/>
											<h3>
												Mobile
												Money
											</h3>
										</div>
									</div>
								</div>
								<div className='bpcsc-section-three'>
									<div>
										<label htmlFor='fname'>
											Card Name
										</label>
										<br />
										<input
											type='text'
											name='fname'
											placeholder='Enter Card Name'
										/>
									</div>
									<div>
										<label htmlFor='fname'>
											Card Number
										</label>
										<br />
										<input
											type='text'
											name='fname'
											placeholder='Enter Card Number'
										/>
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
export default BuyerMarket;

