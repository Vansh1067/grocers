import React from 'react';

import './headerComponent.css'
import Hoc from '../../Hoc/hoc';
import NavViewComponent from './NavViewComponent/navViewComponent';
import NavbarComponent from './NavbarComponent/navbarComponent';

const HeaderComponent=(props)=>{
    return(
        <Hoc className="header">
            <NavViewComponent></NavViewComponent>
            <NavbarComponent></NavbarComponent>
        </Hoc>
    );
}
export default HeaderComponent