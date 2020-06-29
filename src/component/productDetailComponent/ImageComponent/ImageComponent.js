import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc';
import img from '../../../assest/promo.jpg'
import './ImageComponent.css'
const ImageComponent=(props)=>{
    return(
        <Hoc class="imageContainer">
          <img src={img}/>
        </Hoc>
    );
}
export default ImageComponent
