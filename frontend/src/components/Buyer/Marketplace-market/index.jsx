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
// import InventoryGrid from '../../../Cards'

const BuyerMarket = () => {
	const [marketProduct, setMarketProduct] = useState([]);
	const [graphData, setGraphData] = useState([]);
	const [year, setYear] = useState('2016');

	useEffect(() => {
		async function getData() {
			const { data } = await axios.get('/stocks/');
			setMarketProduct(data);
		}
		console.log(graphData);
		getData();
	}, [graphData]);

	useEffect(() => {
		marketProduct.map(product => setGraphData(product.pro_name));
	}, [marketProduct]);



	const runGridOne = () => {
		document
			.querySelector('.bpcsc-grid-one')
			.classList.add('bordershown');
		document
			.querySelector('.bpcsc-grid-two')
			.classList.remove('bordershown');
		// document.querySelector('.bpcsc-grid-three').style.visibility = 'none';

		document.querySelector('.fist-card-shown').style.display='flex'
		document.querySelector('.second-card-shown').style.display = 'none';
		// document.querySelector('.three-card-shown').style.display = 'none';

	}
	const runGridTwo = () => {
		document.querySelector('.bpcsc-grid-one').classList.remove('bordershown');
		document.querySelector('.bpcsc-grid-two').classList.add('bordershown');
		// document.querySelector('.bpcsc-grid-three').style.display = 'none';

		document.querySelector('.fist-card-shown').style.display = 'none';
		document.querySelector('.second-card-shown').style.display = 'flex';
		// document.querySelector('.three-card-shown').style.display = 'none';
	};	

	const closeCard = () => {
		document.querySelector('.buyer-plenty-cards-sides').style.display = 'none'
	}

	const openBuyPage = () => {
		document.querySelector('.buyer-plenty-cards-sides').style.display = 'flex'
	}

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
										
									{marketProduct.map(stock => (
									console.log(stock),
									<div style={{width: '100%'}}>
										<BuyerCard
										key={stock._id}
										product={stock}
									/>
									</div>
								))}
										{/*dummy ends here*/}
									</div>
								</div>
							</div>
						</div>
						{/* market-content-graph */}
						
						{/*market-content-prices */}
						<div className='buyer-plenty-cards-sides'>
							<div className='bpcs-container'>
								<div className='bpcsc-header' onClick={closeCard}>
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
										<div
											className='bpcsc-grid bpcsc-grid-one bordershown'
											onClick={
												runGridOne
											}
										>
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
										<div
											className='bpcsc-grid bpcsc-grid-two'
											onClick={
												runGridTwo
											}
										>
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
										<div className='bpcsc-grid bpcsc-grid-three'>
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
								<div className='bpcsc-section-three fist-card-shown'>
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
									<div>
										<div>
											<label htmlFor='fname'>
												Exp date
											</label>
											<br />
											<input
												type='month'
												name='fname'
												// placeholder='Enter Card Number'
											/>
										</div>
									</div>
									<div className='custom-button-styles'>
										<GreenButton
											customLabel='Confirm Payment'
											customStyle={{
												fontSize: '12px',
											}}
										/>
									</div>
								</div>
								<div className='bpcsc-section-three second-card-shown'>
									<div>
										<label htmlFor='fname'>
											Account Name
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
											Account Number
										</label>
										<br />
										<input
											type='text'
											name='fname'
											placeholder='Enter Card Number'
										/>
									</div>
									<div>
										<div className='expiry-month-date'>
											<div>
												<label htmlFor='fname'>
													Branch
												</label>
												<br />
												<input
													type='text'
													name='fname'
													placeholder=''
												/>
											</div>
											<div>
												<label htmlFor='fname'>
													Code
												</label>
												<br />
												<input
													type='text'
													name='fname'
													placeholder=''
												/>
											</div>
										</div>
									</div>
									<div className='custom-button-styles'>
										<GreenButton
											customLabel='Confirm Payment'
											customStyle={{
												fontSize: '12px',
											}}
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
