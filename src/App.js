import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent';
import SectionComponent from './containers/sectionComponent/sectionComponent'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
    <SectionComponent></SectionComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
