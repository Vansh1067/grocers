import React from 'react';

import './navbarComponent.css'
import Hoc from '../../../Hoc/hoc';
const NavbarComponent=(props)=>{
    return(
        <Hoc className="navbar">
            <div class="navs">
           <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About us</a></li>
               <li><a href="">Fruits &amp; Vagetables </a></li>
               <li><a href="">Grocery &amp; Staples</a></li>
               <li><a href="">My Account</a>
               </li>
               <li><a href="">Contact</a></li>
               
           </ul>
           </div>
        </Hoc>
    );
}
export default NavbarComponent