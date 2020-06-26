import React from 'react';

import './navbarComponent.css'
import Hoc from '../../../Hoc/hoc';
const NavbarComponent=(props)=>{
    return(
        <Hoc className="navbar">
            <div class="navs">
           <ul class="nav-ul">
               <li><a href="">Categories</a>
               <ul class="nest-ul">
                   <li><a href="">Baby Care</a></li>
                   <li><a href="">Beverages</a></li>
                   <li><a href="">Cleaning &amp; Household</a></li>
                   <li><a href="">Daily Needs</a></li>
                   <li><a href="">Dairy &amp; Bakery</a></li>
                   <li><a href="">Fruits</a></li>
                   <li><a href="">Oil &amp; Spices</a></li>
                   <li><a href="">Personal Care</a></li>
                   <li><a href="">Rice Grains</a></li>
                   <li><a href="">Snaks &amp; Foods</a></li>

               </ul>
               </li>

               <li><a href="">Home</a></li>
               <li><a href="">Specials</a></li>
               <li><a href="">Brand</a></li>

               <li><a href="">About us</a></li>
               
               <li><a href="">My Account</a>
               <ul>
                   <li><a href="">Login</a></li>
                   <li><a href="">Register</a></li>
                  

               </ul>
               </li>
               <li><a href="">Contact</a></li>
               
           </ul>
           </div>
        </Hoc>
    );
}
export default NavbarComponent