import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { InventoryAddCard } from '../../../Cards';
import { generalIcons } from '../../../themes';
import MarketplaceSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';
import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-ion/trash';
import axios from 'axios';
import './styles.css';
import { InventoryGrid, InventoryMenu } from '../../../Cards';
import { GreenButton } from '../../Buttons';

const MarketPlaceInventory = () => {
	// api calls
	const [productHeader, setProductHeader] = useState('New Item')
	const [stocks, setStocks] = useState([]);
	const [previewImage, setPreviewImage] = useState(null);
	const [productName, setproductName] = useState('')
	const [nature, setNature] = useState('');
	const [quantity, setQuantity] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [productImage, setProductImage] = useState(null)


	useEffect(() => {
		async function fetchStocks() {
			const { data } = await axios.get(
				'/stocks/',
			);
			setStocks(data);
		}

		fetchStocks();
	}, []);

	const addToStock = () => {

			let bodyFormData = new FormData();
			bodyFormData.append('pro_name', productName);
			bodyFormData.append('image', productImage);
			bodyFormData.append('nature', nature);
			bodyFormData.append('unit', quantity);
			// bodyFormData.append('expiry', expiryDate);

		axios({
			method: 'post',
			url: '/stocks/create/',
			data: bodyFormData,
		})
			.then(res => console.log('res',res))
			.catch(err => console.log('err', err));
	};

	// display grid function
	const assetGridFunction = () => {
		document.querySelector('.inventorystyle').style.display = 'block';
		document.querySelector('.inventoryliststyle').style.display =
			'none';
		console.log('hello');
	};

	//display table funtion
	const assetMenuFunction = () => {
		document.querySelector('.inventoryliststyle').style.display =
			'block';
		document.querySelector('.inventorystyle').style.display = 'none';
		console.log('hell');
	};

	//delete checkbox
	const deleteAllselected = () => {
		document.querySelector('.icon-trassh').style.display = 'block';
	};
	const handleProductClose = () => {
			document.querySelector('.add-new-product').style.display = 'none'
	}
	const handleProductAdd = () => {
		document.querySelector('.add-new-product').style.display = 'flex';
	};
	const upload = e => {
		// console.log('upload');

		if (e.target.files[0].size <= 50000000) {
			let file = e.target.files[0];
			setProductImage(file)
			let reader = new FileReader();
			reader.onload = function (e) {
				setPreviewImage(e.target.result);
			};
			reader.readAsDataURL(file);
		} else {
			e.target.value = ' ';
			alert('please insert image lesser than 2mb');
		}
	};


	return (
		<div className='marketdashboard-container'>
			<div className='add-new-product'>
				<div className='anp-card'>
					<div
						className='anp-card-secone'
						onClick={handleProductClose}
					>
						<img
							src={generalIcons.Asset_Close}
							alt='close'
						/>
					</div>
					<div className='anp-card-sectwo'>
						<h3>{productHeader}</h3>
					</div>
					<div className='anp-card-secthree'>
						<div className='anp-stretch'>
							<label htmlFor='fname'>
								Product Name
							</label>
							<br />
							<input
								type='text'
								name='productName'
								placeholder='Enter Product Name'
								value={productName}
								onChange={e =>
									setproductName(
										e.target.value,
									)
								}
							/>
						</div>
						<div className='anp-stretch'>
							<label htmlFor='fname'>Nature</label>
							<br />
							<select
								name='nature'
								onChange={e =>
									setNature(e.target.value)
								}
							>
								<option
									disabled
									selected
									hidden
								>
									Select product nature
								</option>
								<option value='perishable'>
									Perishable
								</option>
								<option value='not prerishable'>
									Not Perishable
								</option>
							</select>
						</div>
						<div className='anp-stretch'>
							<label htmlFor='fname'>
								Quantity
							</label>
							<br />
							<input
								type='text'
								name='quantity'
								placeholder='Enter Quantity in tonnes'
								value={quantity}
								onChange={e =>
									setQuantity(
										e.target.value,
									)
								}
							/>
						</div>
						<div className='anp-stretch'>
							<label htmlFor='fname'>
								Date of Expiry
							</label>
							<br />
							<input
								type='date'
								name='expiryDate'
								placeholder='Enter Expiry Date'
								value={expiryDate}
								onChange={e =>
									setExpiryDate(
										e.target.value,
									)
								}
							/>
						</div>
						<div className='anp-image-upload'>
							<p>upload a photo</p>
							<label htmlFor='uploadImage'>
								{previewImage ? (
									<img
										src={previewImage}
										alt='preview'
									/>
								) : (
									<p>upload</p>
								)}
							</label>
							<input
								type='file'
								name='uploadImage'
								id='uploadImage'
								accept='image/gif, image/jpeg, image/png, image/jpg'
								onChange={e => {
									let files =
										e.target.files;
									if (files.length === 1) {
										upload(e);
									} else {
										e.target.value = '';
										alert(
											'Please upload image only',
										);
									}
								}}
							/>
						</div>
						<div
							className='anp-button'
							onClick={addToStock}
						>
							<GreenButton
								customLabel='Done'
								customStyle={{
									marginBottom: '20px',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='marketdashboard-container-header'>
				<MarketplaceSidebar inventoryclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-inventory-one'>
					<h2>Stock</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardinventory-content-container'>
					<div className='dashboardsolid-containter'>
						<div className='inventory-dashboard-header'>
							<div className='inventory-left'>
								<p>Select All</p>
								<input
									type='checkbox'
									name=''
									id=''
									onChange={
										deleteAllselected
									}
								/>
								<Icon
									icon={trashIcon}
									color='red'
									width='22'
									style={{
										marginTop: '-5px',
										marginLeft: '15px',
										display: 'none',
									}}
									className='icon-trassh'
								/>
							</div>
							<div className='intentory-add-product'>
								<p onClick={handleProductAdd}>
									<span>+</span> ADD PRODUCT
								</p>
							</div>
							<div className='inventory-right qwerty'>
								<div
									className='inventory-icon-right invliticonlineup'
									onClick={
										assetGridFunction
									}
								>
									<img
										className='invliticonlineup-active'
										src={
											generalIcons.Asset_Grid
										}
										alt='list'
									/>
								</div>
								<div
									className='inventory-icon-right'
									onClick={
										assetMenuFunction
									}
								>
									<img
										src={
											generalIcons.Asset_Menu
										}
										alt='list'
									/>
								</div>
							</div>
						</div>
						<div className='inventorystyle'>
							<div className='inventory-dashboard-body '>
								{stocks.map(stock => (
									<InventoryGrid
										key={stock._id}
										product={stock}
									/>
								))}
							</div>
						</div>
						<div
							className='transaction-dashboard-body inventoryliststyle'
							style={{ display: 'none' }}
						>
							{/*inventory table header container code */}
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

							{/*inventory table body container code */}
							<div className='transaction-dashboard-body-body'>
								<div className='transaction-contents'>
									<div className='hrderd'>
										<div className='transaction-dashboard-body-body-contents '>
											<div className='transaction-body-content'>
												<h3>
													Product
													Name
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Nature
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Unit
													{
														'('
													}
													tonnes
													{
														')'
													}
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Expiry
													Date
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Action
												</h3>
											</div>
										</div>
									</div>
								</div>

								{stocks.map(stock => (
									<InventoryMenu
										key={stock._id}
										product={stock}
									/>
								))}

								{/* paste here */}
							</div>

							{/*inventory table footer container code */}
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
export default MarketPlaceInventory;
