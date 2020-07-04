import React from 'react';

import './footerComponent.css'
import Hoc from '../../Hoc/hoc'
import FooterDetailComponent from './footerDetailComponent/footerDetailComponent';
import FooterSocialComponent from './footerSocialComponent/footerSocialComponent'
const FooterComponent=(props)=>{
    
    return(
        <Hoc className='footer'>
            <FooterDetailComponent></FooterDetailComponent>
            <FooterSocialComponent></FooterSocialComponent>
            <p className="copy">Copyright <span >&copy; </span>2020 </p>
        </Hoc>
    );
}
export default FooterComponent