import React from 'react';
import { productImages } from '../themes';

const BuyerCard = ({ product }) => {
	return (
		<div className='inventory-detail-card'>
			<div className='inventory-detail-card-header'>
				{/* <div className='inventory-detail-card-header-header'>
					<p>Edit</p>
					<p>x</p>
				</div> */}
				<img src={productImages.Maize} alt='maize' />
			</div>
			<div className='inventory-detail-card-body'>
				<div className='inventory-detail-card-body-header'>
					<h3>{'Maize'}</h3>
					{/* <div className='card-header-icon'></div> */}
				</div>
				<div className='inventory-detail-card-body-detail'>
					<div className='card-body-top'>
						<p className='headinginv'>Price:</p>
						<p>{'12.00'} ghc</p>
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
