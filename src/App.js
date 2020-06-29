import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionComponent from './containers/sectionComponent/sectionComponent';
import ProductListContainer from './containers/productListContainers/productListContainer'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
    
    {/* <SectionComponent></SectionComponent> 
<ProductListContainer/>*/}
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
