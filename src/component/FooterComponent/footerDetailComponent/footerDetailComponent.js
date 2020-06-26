import React from 'react';

import './footerDetailComponent.css'
import Hoc from '../../../Hoc/hoc'
import FooterCardComponent from './footerCardComponent/footerCardComponent'
const FooterDetailComponent=(props)=>{
    return(
        <Hoc className='footerDetail'>
            <FooterCardComponent title="Contact Us">
                <div>
                    <p>Ram Bhawan Satti Street</p>
                    <p>Roorkee Uttrakhand</p>
                    <p>vanshtandon1067@gmail.com</p>
                    <p>9760300288</p>
                    <p>grocers@company.com</p>
                </div>
                
            </FooterCardComponent>
            <FooterCardComponent title="Extras">
                <ul>
                        <li><a href="">Brands</a></li>
                        <li><a href="">Gift Certificate</a></li>
                        <li><a href="">Affiliate</a></li>
                        <li><a href="">Specials</a></li>
                        <li><a href="">Contact us</a></li>
                </ul>
            </FooterCardComponent>
            <FooterCardComponent title="Information">
                <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Delivery Information</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Term and Condition</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Site Map</a></li>
                </ul>
            </FooterCardComponent>
            <FooterCardComponent title="MyAccount">
                <ul>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Order History</a></li>
                        <li><a href="">News Letter</a></li>
                        <li><a href="">Wish List</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Returns</a></li>
                </ul>
            
            </FooterCardComponent>

        </Hoc>
    );
}
export default FooterDetailComponent