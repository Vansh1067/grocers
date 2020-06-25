import React from 'react';

import './footerDetailComponent.css'
import Hoc from '../../../Hoc/hoc'
import FooterCardComponent from './footerCardComponent/footerCardComponent'
const FooterDetailComponent=(props)=>{
    return(
        <Hoc className='footerDetail'>
            <FooterCardComponent><p>ContactUs</p></FooterCardComponent>
            <FooterCardComponent><p>Extras</p></FooterCardComponent>
            <FooterCardComponent><p>Information</p></FooterCardComponent>
            <FooterCardComponent><p>MyAccount</p></FooterCardComponent>

        </Hoc>
    );
}
export default FooterDetailComponent