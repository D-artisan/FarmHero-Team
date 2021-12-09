import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';
// import { generalIcons, productImages, sellerImages } from '../../../themes';
import BuyerSidebar from '../Marketplace-sidebar';
import { Navbar } from '..';
import './styles.css';
import axios from 'axios';
import { TransactionCard } from '../../../Cards';
import { generalIcons } from '../../../themes';


const BuyerTransaction = () => {
	const [transaction, setTransaction] = useState([])

	// useEffect(() => {
	// 	async function getData() {
	// 		const {data} = await axios.get('/transactions/')
	// 		setTransaction(data)
	// 	}
	// 	getData()
	// }, [])


	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<BuyerSidebar transactionclass='market-active' />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-transaction'>
					<h2>Latest Transactions</h2>
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardtransaction-content-container'>
					<div className='dashboardsolid-containter'>
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

								{/* Head  */}
								<div className='transaction-contents'>
									<div className='hrderd'>
										<div className='transaction-dashboard-body-body-contents '>
											<div className='transaction-body-content'>
												<h3>
													Name
												</h3>
											</div>
											<div className='transaction-body-content'>
												<h3>
													Item
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
													Amount
													{
														'('
													}
													ghc
													{
														')'
													}
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

								{transaction.map(product => (
									<TransactionCard key={product._id} product={product}/>
								))}

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
export default BuyerTransaction;




