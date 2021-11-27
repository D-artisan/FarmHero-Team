// Parent container

import React from "react";
import { Route, Switch } from "react-router";
import { Buyer, ForgetPassword, Login, ResetPassword, Seller, SignUp, VerifyMail } from "./screens";



const App = () => {
  return(
    <Switch>
      <Route path='/'  exact component={Login}/>
      <Route path='/seller' component={Seller} /> 
      <Route path='/buyer' component={Buyer} /> 
      <Route path='/signup' component={SignUp} />
      <Route path='/forget-pass' component={ForgetPassword} />
      <Route path='/reset-pass' component={ResetPassword} />
      <Route path='/verification' component={VerifyMail} />
    </Switch>
      

  )
}

export default App;