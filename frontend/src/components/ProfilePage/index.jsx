import React from 'react';
import { generalIcons } from '../../themes';
import { MarketplaceSidebar } from '../Marketplace';
import { Navbar } from '..';
import { Link } from 'react-router-dom';
import {GreenButton } from '../Buttons';
import './styles.css';

const ProfilePage = () => {
	const runSectionThree = () => {
		document.querySelector('.pdfone').classList.add('profile-active');
		document
			.querySelector('.pdftwo')
			.classList.remove('profile-active');
		document
			.querySelector('.pdfthree')
			.classList.remove('profile-active');
		document
			.querySelector('.pdffour')
			.classList.remove('profile-active');
		document
			.querySelector('.pdffive')
			.classList.remove('profile-active');
		document.querySelector(
			'.profile-section-three-content',
		).style.display = 'block';
		document.querySelector(
			'.profile-section-four-content',
		).style.display = 'none';
	};
	const runSectionFour = () => {
		document
			.querySelector('.pdfone')
			.classList.remove('profile-active');
		document
			.querySelector('.pdftwo')
			.classList.remove('profile-active');
		document.querySelector('.pdfthree').classList.add('profile-active');
		document
			.querySelector('.pdffour')
			.classList.remove('profile-active');
		document
			.querySelector('.pdffive')
			.classList.remove('profile-active');
		document.querySelector(
			'.profile-section-three-content',
		).style.display = 'none';
		document.querySelector(
			'.profile-section-four-content',
		).style.display = 'block';
	};
	return (
		<div className='marketdashboard-container'>
			<div className='marketdashboard-container-header'>
				<MarketplaceSidebar />
			</div>
			<div className='marketdashboard-container-body'>
				<div className='dashboard-profile'>
					<img src={generalIcons.Asset_Arrow} alt='arrow' />
				</div>
				<div className='navbar-position-containery'>
					<Navbar />{' '}
				</div>
				<div className='marketdashboardprofile-content-container'>
					<div className='dashboardsolid-containter'>
						<div className='profile-container'>
							<div className='profile-container-header'>
								<h3>Profile</h3>
							</div>
							<div className='profile-container-section-one'>
								<div className='profile-profile-image'>
									<img
										src={
											generalIcons.Asset_Profile
										}
										alt=''
									/>
								</div>
								<div className='profile-content-container'>
									<div className='pcc-header'>
										<div className='pcc-header-left'>
											<h3>
												Timo
												Afran
											</h3>
											<p>
												Change
												Photo
											</p>
										</div>
										<div className='pcc-header-right'>
											<div className='complete-profile'>
												<p>
													Complete
													Profile
												</p>
											</div>
										</div>
									</div>
									<div className='pcc-body'>
										<div className='pcc-body-content'>
											<div className='pcc-body-content-slide pccf'></div>
											<div className='pcc-body-content-slide'></div>
										</div>
									</div>
								</div>
							</div>
							<div className='profile-container-section-two'>
								<div className='profile-section-two-content'>
									<div
										className='profile-section-two-inner pdfone profile-active'
										onClick={
											runSectionThree
										}
									>
										<p>Personal </p>
										<p>Information</p>
									</div>
									<div className='profile-section-two-inner pdftwo'>
										<p>Banking </p>
										<p>Information</p>
									</div>
									<div
										className='profile-section-two-inner pdfthree'
										onClick={
											runSectionFour
										}
									>
										<p>Company </p>
										<p>Information</p>
									</div>
									<div className='profile-section-two-inner pdffour'>
										<p>Address </p>
									</div>
									<div className='profile-section-two-inner pdffive profile-last'>
										<p>Other </p>
									</div>
								</div>
							</div>
							<div className='profile-container-section-three'>
								<div className='personal-info-content profile-section-three-content'>
									<form className='profile-section-three-content-form'>
										<div>
											<label htmlFor='cardType'>
												Country
											</label>
											<br />
											<select>
												<option
													selected
													disabled
													hidden
												>
													Select
													One
												</option>
												<option>
													Ghana
												</option>
												<option>
													Togo
												</option>
												<option>
													Nigeria
												</option>
											</select>
										</div>
										<div>
											<label htmlFor='cardType'>
												Region
											</label>
											<br />
											<select>
												<option
													selected
													disabled
													hidden
												>
													Select
													One
												</option>
												<option>
													a
												</option>
												<option>
													b
												</option>
												<option>
													c
												</option>
											</select>
										</div>
										<div className='bottom'>
											<label htmlFor='fname'>
												First
												Name
											</label>
											<br />
											<input
												type='text'
												name='fname'
												placeholder='Enter First Name'
											/>
										</div>
										<div className='bottom'>
											<label htmlFor='lname'>
												Last
												Name
											</label>
											<br />
											<input
												type='text'
												name='lname'
												placeholder='Enter Last Name'
											/>
										</div>

										<div className='bottom'>
											<label htmlFor='cardType'>
												ID Card
												Type
											</label>
											<br />
											<select>
												<option
													selected
													disabled
													hidden
												>
													Select
													One
												</option>
												<option>
													NHIS
												</option>
												<option>
													Passport
												</option>
												<option>
													Voters
													Card
												</option>
											</select>
										</div>
										<div className='bottom'>
											<label htmlFor='lname'>
												ID
												Number
											</label>
											<br />
											<input
												type='text'
												name='lname'
												placeholder='Enter ID Number'
											/>
										</div>
									</form>
									<div className='button-container'>
										<Link to='/seller/company'>
											<div className='green profile-bottunr'>
												<GreenButton customLabel='Save' />
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='profile-container-section-four'>
								<div className='personal-info-content profile-section-four-content'>
									<form className='profile-section-four-content-form'>
										<div>
											<label htmlFor='fname'>
												Company
												Name
											</label>
											<br />
											<input
												type='text'
												name='fname'
												placeholder='Enter Company Name'
											/>
										</div>
										<div>
											<label htmlFor='cardType'>
												Company
												Type
											</label>
											<br />
											<select>
												<option
													disabled
													selected
													hidden
												>
													Choose
													Company
													Type
												</option>
												<option>
													Sole
													Proprietorship
												</option>
												<option>
													Limited
													Liability
												</option>
												<option>
													Voters
													Card
												</option>
											</select>
										</div>
										<div className='bottom'>
											<label htmlFor='lname'>
												Company
												Registration
												Number
											</label>
											<br />
											<input
												type='text'
												name='lname'
												placeholder='Enter Company Registration Number'
											/>
										</div>

										<div className='bottom'>
											<label htmlFor='lname'>
												TIN
												Number
											</label>
											<br />
											<input
												type='number'
												name='lname'
												placeholder='Enter TIN Number'
											/>
										</div>
									</form>
									<div className='button-container'>
										<Link to='/seller/company'>
											<div className='green profile-bottunr'>
												<GreenButton customLabel='Save' />
											</div>
										</Link>
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
export default ProfilePage;
