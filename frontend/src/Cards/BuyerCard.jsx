import React from 'react';
import { productImages,sellerImages,generalIcons } from '../themes';
import GreenButton from '../components/Buttons/Green';
import {useHistory} from 'react-router-dom'
// import { sellerImages } from '../../../themes';

const BuyerCard = ({ product }) => {
	const history = useHistory()
	const hiddenFunc = () => {
		console.log(product._id);
		localStorage.setItem('productID', product._id)
			history.push({
				pathname: '/buyer/buyerinner'
			})
	}
	return (
		<div className='inven-detail-card' onClick={hiddenFunc}>
			<div className='inven-detail-card-header'>
				{/* <div className='inventory-detail-card-header-header'>
					<p>Edit</p>
					<p>x</p>
				</div> */}
				<img src={`http://localhost:8000${product.image}`} alt='maize' />
			</div>
			<div className='inven-detail-card-body'>
				<div className='inven-detail-card-body-header'>
					<h3>{product.pro_name}</h3>
					{/* <div className='card-header-icon'></div> */}
				</div>
				<div className='inven-detail-card-body-detail'>
					<div className='card-body-top'>
						<p className='headinginv'>Price:</p>
						<p>{product.unit} ghc</p>
					</div>
					<div className='card-body-top'>
						{/* <p className='headinginv'>Exp Date:</p> */}
						{/* <p>{product.date}</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default BuyerCard;


