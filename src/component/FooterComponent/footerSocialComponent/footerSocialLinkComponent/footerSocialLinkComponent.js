import React from 'react';

import './footerSocialLinkComponent.css'
import Hoc from '../../../../Hoc/hoc'
const HeaderComponent=(props)=>{
    return(
        <Hoc className='footerSocialLink'>
        {props.children}
        </Hoc>
    );
}
export default HeaderComponent