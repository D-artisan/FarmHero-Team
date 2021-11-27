import React from 'react'
import { Route, Switch } from 'react-router';
import { SellerMarketPlace } from '..';
import { AddressInfo, CompanyInfo, PersonalInfo } from '../../../components';
import './styles.css'


const Seller = () => {
      return(
            <div className='seller-container'>
                  <Switch>
                        <Route path='/seller/' exact component={PersonalInfo}/>
                        <Route path='/seller/company' component={CompanyInfo} />
                        <Route path='/seller/address' component={AddressInfo} />
                        <Route path='/seller/marketplace' component={SellerMarketPlace} />
                  </Switch>
            </div>
      )     
}

export default Seller;