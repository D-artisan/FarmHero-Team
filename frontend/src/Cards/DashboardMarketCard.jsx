import React from "react";


const DashBoardMarketCard = ({product}) => {
      return (
		<div className='market-detail-card'>
			<div className='market-detail-card-image'>
				{' '}
				<img src={product.image} alt='cocoyam' />
			</div>
			<div className='market-detail-card-content'>
				<h3>{product.pro_name}</h3>
				<p>{`Price: ${product.unit_price}ghc`}</p>
			</div>
		</div>
	);
}

export default DashBoardMarketCard