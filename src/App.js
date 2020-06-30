import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionComponent from './containers/sectionComponent/sectionComponent';
import ProductListContainer from './containers/productListContainers/productListContainer'
import ProductDetailtContainer from './containers/ProductDetailContainer/ProductDetailContainer';
import Backdrop from './component/backdrop/backdrop'

function App() {
  return (
    <div className="App">
      <Backdrop/>
      <HeaderComponent></HeaderComponent>
    
    {/* <SectionComponent></SectionComponent> 
{/* <ProductListContainer/> */}
<ProductDetailtContainer/>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
