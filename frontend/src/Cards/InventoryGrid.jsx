import React from 'react';


const InventoryGrid = ({ product }) => {
	return (
		<div className='inven-detail-card'>
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
				</div>
			</div>
		</div>
	);
};
export default InventoryGrid;
