import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube,faInstagram,faWhatsapp,faGooglePlay,faAppStoreIos,
    faWindows,faCcVisa,faCcPaypal,faCcMastercard,faAmazonPay} from '@fortawesome/free-brands-svg-icons'

import './footerSocialComponent.css'
import Hoc from '../../../Hoc/hoc'
import FooterSocialLinkComponent from './footerSocialLinkComponent/footerSocialLinkComponent'
const FooterSocialComponent=(props)=>{
    return(
        <Hoc className="footerSocial">
            <FooterSocialLinkComponent>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faYoutube}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </FooterSocialLinkComponent>
            <FooterSocialLinkComponent>
            <FontAwesomeIcon icon={faGooglePlay}/>
            <FontAwesomeIcon icon={faAppStoreIos}/>
            <FontAwesomeIcon icon={faWindows}/>

            </FooterSocialLinkComponent>
            <FooterSocialLinkComponent>
            <FontAwesomeIcon icon={faCcVisa}/>
            <FontAwesomeIcon icon={faAmazonPay}/>
            <FontAwesomeIcon icon={faCcMastercard}/>
            <FontAwesomeIcon icon={faCcPaypal}/>
            

            </FooterSocialLinkComponent>

        </Hoc>
    );
}
export default FooterSocialComponent