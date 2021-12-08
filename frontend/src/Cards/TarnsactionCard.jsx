import React from "react";
import { generalIcons } from '../themes';
import { Icon } from '@iconify/react';
import downloadIcon from '@iconify/icons-ion/download';
import documentText from '@iconify/icons-ion/document-text';

const TransactionCard = ({product}) => {
      return (
		<div className='transaction-contents'>
			<div className='heerderd'>
				<div className='transaction-dashboard-body-body-contents'>
					<div className='transaction-body-content'>
						<p>{product.buyer_name}</p>
					</div>
					<div className='transaction-body-content'>
						<p>{product.pro_name}</p>
					</div>
					<div className='transaction-body-content'>
						<p>
							{product.unit} <span>t</span>
						</p>
					</div>
					<div className='transaction-body-content'>
						<img
							className='tr-cedis'
							src={generalIcons.Asset_Cedi}
							alt='cedi'
						/>
						<p>{product.unit_price}</p>
					</div>
					<div className='transaction-body-content '>
						<Icon
							icon={documentText}
							color='#777'
							width='22'
							style={{
								marginTop: '0px',
								marginRight: '5px',
							}}
						/>

						<Icon
							icon={downloadIcon}
							color='#777'
							width='25'
							style={{
								marginTop: '-5px',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransactionCard