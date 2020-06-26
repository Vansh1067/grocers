import React from 'react';

import './brandComponent.css'
import Hoc from '../../../Hoc/hoc'
import Logo from '../../../assest/logo.png'

const BrandComponent=(props)=>{
    return(
        <Hoc className="logo">
            <img src={Logo} />
        </Hoc>
    );
}
export default BrandComponent