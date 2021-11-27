import React from 'react';
import { Link } from 'react-router-dom';
import GreenButton from '../../components/Buttons/Green';
import { generalIcons } from '../../themes';
import './styles.css';

const InventoryAddCard = ({ card }) => {
	
	return (
		<div className='inventoryaddcard-container'>
			<div className='addcard'>
				<div className='addcard-header'>
					<Link to='#'>
						<div
							className='addcard-header-top'
						>
							<img
								src={generalIcons.Asset_Close}
								alt='close'
							/>
						</div>
					</Link>
					<div className='addcard-header-bottom'>
						<h3>New Item</h3>
					</div>
				</div>
				<div className='addcard-body'>
					<form>
						<div className='addcard-form-content'>
							<label htmlFor='cardType'>
								Product Name
							</label>
							<br />
							<select className='addcard-select'>
								<option></option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
						<div className='addcard-form-content'>
							<label htmlFor='cardType'>
								Nature
							</label>
							<br />
							<select className='addcard-select'>
								<option></option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
						<div className='addcard-form-content'>
							<label htmlFor='cardType'>
								Quantity
							</label>
							<br />
							<select className='addcard-select'>
								<option></option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
						<div className='addcard-form-content'>
							<label htmlFor='cardType'>
								Date of Expiry
							</label>
							<br />
							<select className='addcard-select'>
								<option></option>
								<option>Seller</option>
								<option>Buyer</option>
							</select>
						</div>
					</form>
					<div className='addcard-image-content'>
						<label htmlFor='cardType'>
							Upload Photo
						</label>
						<br />
						<div className='addcard-image'></div>
						<div className='addCard-button'>
							<GreenButton customLabel='Done' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InventoryAddCard;
