import React from 'react';
import {Redirect} from 'react-router-dom'
import './headerComponent.css'
import Hoc from '../../Hoc/hoc';
import NavViewComponent from './NavViewComponent/navViewComponent';
import NavbarComponent from './NavbarComponent/navbarComponent';
import BrandComponent from './BrandComponent/brandComponent'

const HeaderComponent=(props)=>{
    return(
        <Hoc className="header">
            <div className="brand">
            <BrandComponent></BrandComponent>

            </div>
            <div className="nav">
            <NavViewComponent></NavViewComponent>
            <NavbarComponent></NavbarComponent>
            </div>
            
        </Hoc>
    );
}
export default HeaderComponent