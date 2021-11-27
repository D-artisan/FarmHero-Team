import React,{useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import trashIcon from '@iconify/icons-ion/trash';
import { sellerImages, generalIcons } from '../themes';
import { GreenButton } from '../components/Buttons';
import axios from 'axios';


const InventoryMenu = ({product}) => {
	const [productUpdateHeader] = useState('Update Item');
	const [stocks, setStocks] = useState([]);
	const [previewImage, setPreviewImage] = useState(null);
	const [productName, setproductName] = useState('');
	const [nature, setNature] = useState('');
	const [quantity, setQuantity] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [productImage, setProductImage] = useState(null);


	useEffect(() => {
		async function fetchStocks() {
			const { data } = await axios.get('/stocks/');
			setStocks(data);
		}

		fetchStocks();
	}, []);

	const updateStock = () => {
		let bodyFormData = new FormData();
		bodyFormData.append('pro_name', productName);
		bodyFormData.append('image', productImage);
		bodyFormData.append('nature', nature);
		bodyFormData.append('unit', quantity);
		// bodyFormData.append('expiry', expiryDate);

		axios({
			method: 'put',
			url: `/stocks/update/${product._id}/`,
			data: bodyFormData,
		})
			.then(res => console.log('res', res))
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
		document.querySelector('.update-new-product').style.visibility =
			'hidden';
	};
	const handleProductAdd = () => {
		document.querySelector('.update-new-product').style.visibility =
			'visible';
	};
	const upload = e => {
		// console.log('upload');

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

	const handleDelete = () => {
		console.log(product);
		axios({
			method: 'delete',
			url: `/stocks/delete/${product._id}/`
		}).then(
			res => console.log(res)
		).catch(err => console.log('err', err))
	}

	return (
		<div className='transaction-contents'>
			<div className='add-new-product update-new-product'>
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
			<div className='heerderd'>
				<div className='transaction-dashboard-body-body-contents'>
					<div className='transaction-body-content'>
						<p>{product.pro_name}</p>
					</div>
					<div className='transaction-body-content'>
						<p>{product.nature}</p>
					</div>
					<div className='transaction-body-content'>
						<p>
							{product.unit} <span>t</span>
						</p>
					</div>
					<div className='transaction-body-content'>
						<p>{product.date}</p>
					</div>
					<div className='transaction-body-content '>
						<div
							className='inven-body-header-img'
							onClick={handleProductAdd}
						>
							<img
								src={sellerImages.Asset_Write}
								alt='notes'
							/>
						</div>

						<div onClick={handleDelete}>
							<Icon
								icon={trashIcon}
								color='#ff0000'
								width='22'
								style={{
									marginTop: '-5px',
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
export default InventoryMenu;
