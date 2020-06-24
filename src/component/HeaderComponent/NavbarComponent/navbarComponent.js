import React from 'react';

import './navbarComponent.css'
import Hoc from '../../../Hoc/hoc'
const NavbarComponent=(props)=>{
    return(
        <Hoc className="navbar">
            <p class="logo">logo</p>
            <p class="navs">NavBar</p>
        </Hoc>
    );
}
export default NavbarComponent