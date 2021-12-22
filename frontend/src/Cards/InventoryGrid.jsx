import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-ion/trash';
import { sellerImages, generalIcons } from '../themes';
import axios from 'axios';
import { GreenButton } from '../components/Buttons';


const InventoryGrid = ({ product }) => {
	const [productUpdateHeader] = useState('Update Item');
	const [stocks, setStocks] = useState([]);
	const [previewImage, setPreviewImage] = useState(null);
	const [productName, setproductName] = useState('');
	const [nature, setNature] = useState('');
	const [quantity, setQuantity] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [productImage, setProductImage] = useState(null);





	const handleDelete = () => {
		console.log(product);
		axios({
			method: 'delete',
			url: `/stocks/delete/${product._id}/`
		}).then(
			res => {
				if(res.status === 204){
					window.location.reload()
				}
				console.log(res)}
		).catch(err => console.log('err', err))
		}
	
	
	
	
	
	const updateStock = () => {
		let bodyFormData = new FormData();
		bodyFormData.append('pro_name', productName === '' ? product.pro_name : productName);
		bodyFormData.append('image', productImage ? productImage : previewImage);
		bodyFormData.append('nature', nature === '' ? product.nature : nature);
		bodyFormData.append('unit', quantity === '' ? product.quantity : quantity);
		// bodyFormData.append('expiry', expiryDate);

		axios({
			method: 'put',
			url: `/stocks/update/${product._id}/`,
			data: bodyFormData,
		})
			.then(res => {
				if (res.statusText === "OK") {
					window.location.reload()
				}
				console.log('res', res)})
			.catch(err => console.log('err', err));
	};

	const handleProductClose = () => {
		document.querySelector('.update-new-menu-product').style.display =
			'none';
	};
	const handleProductAdd = () => {
		document.querySelector('.update-new-menu-product').style.display =
			'flex';
	};
	const upload = e => {
		console.log('upload');

		if (e.target.files[0].size <= 50000000) {
			let file = e.target.files[0];
			setProductImage(file);
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
		<div className='inven-detail-card'>
			
			<div className='add-new-product update-new-menu-product'>
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
						<h3>{productUpdateHeader}</h3>
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
								placeholder={product.pro_name}
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
									{product.nature}
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
								placeholder={product.unit}
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
							<label htmlFor='uploadImage2'>
								{previewImage ? (
									<img
										src={previewImage}
										alt='preview'
									/>
								) : (
									<img
										src={`http://localhost:8000${product.image}`}
										alt='preview'
									/>
								)}
							</label>
							<input
								type='file'
								name='uploadImage2'
								id='uploadImage2'
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
							onClick={updateStock}
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





			<div className='inven-detail-card-header'>
				{/* <div className='inventory-detail-card-header-header'>
					<p>Edit</p>
					<p>x</p>
				</div> */}
				<img src= {`http://localhost:8000${product.image}`} alt={product.image} />
			</div>
			<div className='inven-detail-card-body'>
				<div className='inven-detail-card-body-header'>
					<h3>{product.pro_name}</h3>
					<div className='card-header-icon'></div>
				</div>
				<div className='inven-detail-card-body-detail'>
					<div className='card-body-top'>
						<p className='headinginv'>Quantity:</p>
						<p>{product.unit} tonnes</p>
					</div>
					<div className='card-body-top'>
						<p className='headinginv'>Exp Date:</p>
						<p>{product.date}</p>
					</div>
					<div className='card-body-bottom-end'>
					<div
							className='inven-body-header-img'
							onClick={handleProductAdd}
						>
							<img
								src={sellerImages.Asset_Write}
								alt='notes'
								style={{
									marginTop: '12px',
								}}
							/>
						</div>

						<div 
						onClick={handleDelete}
						>
							<Icon
								icon={trashIcon}
								color='#ff0000'
								width='22'
								style={{
									marginTop: '25px',
									marginLeft: '15px',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default InventoryGrid;
