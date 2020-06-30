import React from 'react'

import './decriptionCard.css';
import Hoc from '../../../../Hoc/hoc'


const DescriptionCard =(props)=>{
    return(<Hoc class="descriptionCard">

                <p class="head">{props.title}</p>
                <p>{props.children}</p>
          
    </Hoc>)
}

export default DescriptionCard