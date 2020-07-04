import React from 'react';

import Hoc from '../../Hoc/hoc';
import './backdrop.css'
const Backdrop=(props)=>{
    return(
        <Hoc class="backdrop">
            {props.children}
        </Hoc>
    );
}
export default Backdrop
