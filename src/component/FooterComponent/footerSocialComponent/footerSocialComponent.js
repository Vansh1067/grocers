import React from 'react';

import './footerSocialComponent.css'
import Hoc from '../../../Hoc/hoc'
import FooterSocialLinkComponent from './footerSocialLinkComponent/footerSocialLinkComponent'
const FooterSocialComponent=(props)=>{
    return(
        <Hoc className="footerSocial">
            <FooterSocialLinkComponent><p>Link1</p></FooterSocialLinkComponent>
            <FooterSocialLinkComponent><p>Link2</p></FooterSocialLinkComponent>
            <FooterSocialLinkComponent><p>Link3</p></FooterSocialLinkComponent>

        </Hoc>
    );
}
export default FooterSocialComponent