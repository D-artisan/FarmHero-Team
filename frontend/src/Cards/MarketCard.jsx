import React from "react";
import { generalIcons } from '../themes';
// import { Icon } from '@iconify/react';
// import downloadIcon from '@iconify/icons-ion/download';
// import documentText from '@iconify/icons-ion/document-text';

const MarketCard = ({product}) => {
      const newDate = product.createdAt.slice(0,10)
      return (
		<div className='transaction-contents'>
			<div className='heerderd'>
				<div className='transaction-dashboard-body-body-contents'>
					<div className='transaction-body-content'>
						<p>{newDate}</p>
					</div>
					<div className='transaction-body-content'>
						<p>{product.pro_name}</p>
					</div>
					<div className='transaction-body-content'>
						<img
							className='tr-cedis'
							src={generalIcons.Asset_Cedi}
							alt='cedi'
						/>
						<p>{product.unit}</p>
					</div>
					<div className='transaction-body-content'>
						<img
							className='tr-cedis'
							src={generalIcons.Asset_Cedi}
							alt='cedi'
						/>
						<p>{product.unit_price * product.unit}</p>
					</div>
					<div className='transaction-body-content '>
						<img
							className='tr-cedis'
							src={generalIcons.Asset_Cedi}
							alt='cedi'
						/>
						<p>{product.unit_price * product.unit * 4}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MarketCard