import React from 'react';
import { Link } from 'react-router-dom';
// import { InventoryAddCard } from '../../../Cards';
import { generalIcons, sellerImages } from '../../../themes';
import { Navbar } from '..';
// import { generalIcons } from '../../../themes';
import { Icon } from '@iconify/react';
// import downloadIcon from '@iconify/icons-ion/download';
import trashIcon from '@iconify/icons-ion/trash';
import BuyerSidebar from '../Marketplace-sidebar';
import './styles.css';

const BuyerInventoryList = () => {
	

	const runFunc = () => {
		console.log('hello');
	}
	return (
		<div className='marketdashboard-container'>
			{/* {showListInven ? <InventoryAddCard card={active} /> : ' '} */}
			<div className='marketdashboard-container-header'>
				<BuyerSidebar inventoryclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-inventorylist'>
					<h2>Stock</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardinventorylist-content-container'>
					<div className='dashboardsolid-containter'>
						<div className='inventorylist-dashboard-header'>
							<div className='inventorylist-left'>
								<p>Select All</p>
								<input
									type='checkbox'
									name=''
									id=''
									onChange={runFunc}
								/>
							</div>
							<div className='inventorylist-right'>
								<Link to='/seller/marketplace/inventory'>
									<div className='inventorylist-icon-left'>
										<img
											src={
												generalIcons.Asset_Grid
											}
											alt='grid'
										/>
									</div>
								</Link>
								<Link to='/seller/marketplace/inventorylist'>
									<div className='inventorylist-icon-right'>
										<img
											src={
												generalIcons.Asset_Menu
											}
											alt='list'
										/>
									</div>
								</Link>
							</div>
						</div>
						<div className='transaction-dashboard-body'>
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

								<div className='transaction-contents'>
									<div className='heerderd'>
										<div className='transaction-dashboard-body-body-contents'>
											<div className='transaction-body-content'>
												<p>
													Rice
												</p>
											</div>
											<div className='transaction-body-content'>
												<p>
													Perishable
												</p>
											</div>
											<div className='transaction-body-content'>
												<p>
													5{' '}
													<span>
														t
													</span>
												</p>
											</div>
											<div className='transaction-body-content'>
												<p>
													Dec
													2022
												</p>
											</div>
											<div className='transaction-body-content '>
												<div className='inven-body-header-img'>
													<img
														src={
															sellerImages.Asset_Write
														}
														alt='notes'
													/>
												</div>

												<Icon
													icon={
														trashIcon
													}
													color='#ff0000'
													width='22'
													style={{
														marginTop:
															'-5px',
														marginLeft:
															'15px',
													}}
												/>
											</div>
										</div>
									</div>
								</div>

								{/* paste here */}
							</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};
export default BuyerInventoryList;

// <div className='marketdashboardinventorylist-content-container'>

// 	<div className='inventorylist-dashboard-body'>

		
// 	</div>
// </div>;
