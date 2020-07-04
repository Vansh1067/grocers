import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionComponent from './containers/sectionComponent/sectionComponent';
import ProductListContainer from './containers/productListContainers/productListContainer'
 import ProductDetailtContainer from './containers/ProductDetailContainer/ProductDetailContainer';

import UserInfoComponent from './component/userInfoComponent/userInfoComponent' 

function App() {
  return (
    <div className="App">
      
      <HeaderComponent></HeaderComponent>
  {/*     
    <UserInfoComponent></UserInfoComponent> */}
    <ProductDetailtContainer/>
  <ProductListContainer/>
{/*     <SectionComponent></SectionComponent>  */}


      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
