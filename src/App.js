import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HashLinkObserver from 'react-hash-link';
import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionContainer from './containers/sectionConatiners/sectionContainers';
import ProductListContainer from './containers/productListContainers/productListContainer'
import ProductDetailtContainer from './containers/ProductDetailContainer/ProductDetailContainer';

import UserInfoComponent from './component/userInfoComponent/userInfoComponent' 

import Payment from './component/Checkout/payment'
import Checkout from './component/Checkout/checkout'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Switch>
      <Route path="/" exact component={SectionContainer}/>
      <Route path="/products/:id" component={ProductListContainer}/>
      <Route path="/product/:id" component={ProductDetailtContainer}/>

      <Route path="/account" component={UserInfoComponent}/>
      <Route path="/checkout" exact component={Checkout}/>
<Route path='/checkout/payment'component={Payment}/>


      </Switch>
      <FooterComponent></FooterComponent>
      
      
      {/*  <ProductDetailtContainer/>*/}
    </div>
  );
}

export default App;
