import React from 'react';

import './App.css';
import HeaderComponent from './component/HeaderComponent/headerComponent';
import FooterComponent from './component/FooterComponent/footerComponent'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
