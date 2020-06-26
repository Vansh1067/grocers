import React from 'react';

import './headerComponent.css'
import Hoc from '../../Hoc/hoc';
import NavViewComponent from './NavViewComponent/navViewComponent';
import NavbarComponent from './NavbarComponent/navbarComponent';
import BrandComponent from './BrandComponent/brandComponent'

const HeaderComponent=(props)=>{
    return(
        <Hoc className="header">
            <div class="brand">
            <BrandComponent></BrandComponent>

            </div>
            <div class="nav">
            <NavViewComponent></NavViewComponent>
            <NavbarComponent></NavbarComponent>
            </div>
            
        </Hoc>
    );
}
export default HeaderComponent