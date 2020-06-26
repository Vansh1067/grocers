import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard,faEnvelope,faPhoneAlt,} from '@fortawesome/free-solid-svg-icons'
import './footerDetailComponent.css'
import Hoc from '../../../Hoc/hoc'
import FooterCardComponent from './footerCardComponent/footerCardComponent'
const FooterDetailComponent=(props)=>{
    return(
        <Hoc className='footerDetail'>
            <FooterCardComponent title="Contact Us">
                <div>
                    <address> 
                    <FontAwesomeIcon className="footerIcon"icon={faAddressCard}/> Ram Bhawan Satti Street<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Roorkee Uttrakhand
                    </address>
              
                    <p>   <FontAwesomeIcon className="footerIcon" icon={faEnvelope}/> vanshtandon1067@gmail.com</p>
                    <p><FontAwesomeIcon className="footerIcon" icon={faPhoneAlt}/> 9760300288</p>
                    <p><FontAwesomeIcon className="footerIcon" icon={faEnvelope}/> grocers@company.com</p>
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