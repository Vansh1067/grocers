import React from 'react';

import './footerCardComponent.css'
import Hoc from '../../../../Hoc/hoc'
const FooterCardComponent=(props)=>{
    return(
        <Hoc>
            {props.children}
        </Hoc>
    );
}
export default FooterCardComponent