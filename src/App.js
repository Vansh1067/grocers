import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import HashLinkObserver from 'react-hash-link';
import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionContainer from './containers/sectionConatiners/sectionContainers';
import ProductListContainer from './containers/productListContainers/productListContainer'
import ProductDetailtContainer from './containers/ProductDetailContainer/ProductDetailContainer';
import AccountComponent from './component/accountComponent/accountComponent'
import UserInfoComponent from './component/userInfoComponent/userInfoComponent' 
import Popup from './component/popup/popup'
import Payment from './component/Checkout/payment'
import Checkout from './component/Checkout/checkout'
import { useSelector } from 'react-redux';
function App() {
  const auth=useSelector(state=>state.auth)
  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (auth.isAuth) {
        next();
      }
      next.redirect('/');
    } else {
      next();
    }
  };

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
     {auth.toggleOpen? <Popup />:null}
     <GuardProvider guards={[requireLogin]} >
    
      <Switch>
      <Route path="/products/:id" component={ProductListContainer}/>
      <Route path="/product/:id" component={ProductDetailtContainer}/>

      <GuardedRoute  path="/account" component={UserInfoComponent} meta={{ auth: true }}/>
      <GuardedRoute  path="/checkout" exact component={Checkout} meta={{ auth: true }}/>
      <GuardedRoute  path='/checkout/payment'component={Payment} meta={{ auth: true }}/>
      <Route path="/"  component={SectionContainer}/>


      </Switch>
         
     </GuardProvider>
      <FooterComponent></FooterComponent>
      
   
    </div>
  );
}

export default App;
