import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionComponent from './containers/sectionComponent/sectionComponent';
import UserCartContainer from './containers/userCartComponent/userCartContainer'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <UserCartContainer/>
    <SectionComponent></SectionComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
