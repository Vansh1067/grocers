import React from 'react';

import './cardBodyComponent.css'
import Hoc from '../../../Hoc/hoc'


const CardBodyComponent=(props)=>{

  
    return(
        <Hoc class="cardBody" {...props}>
          {props.children}
        </Hoc>
    );
}
export default CardBodyComponent