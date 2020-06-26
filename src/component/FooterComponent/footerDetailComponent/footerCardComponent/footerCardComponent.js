import React from 'react';

import './footerCardComponent.css'
import Hoc from '../../../../Hoc/hoc'
const FooterCardComponent=(props)=>{
    return(
        <Hoc className='footerCard'>
            <h3>{props.title}</h3>
            {props.children}
        </Hoc>
    );
}
export default FooterCardComponent