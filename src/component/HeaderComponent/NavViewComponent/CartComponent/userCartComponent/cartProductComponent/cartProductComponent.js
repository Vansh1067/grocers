import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './cartProductComponent.css'
import Hoc from '../../../../../../Hoc/hoc';
import img from '../../../../../../assest/Capture.PNG'
const CartProduct=(props)=>{
    return(
        <Hoc>
            <div class='userCard'>
                <FontAwesomeIcon className="cartIcons"icon={faTimes}/>
                <div class="cardImage">
                    <img src={img}/>
                </div>
                <div class="UUsercardBody">
                    <p id="UOffer">Save 20%</p>
                        <p>Product Title</p>
                      <p id="Ustatus">  <span><FontAwesomeIcon icon={faCheckCircle}/></span> Availabel</p>
                        <p>$250 <span class="discount">$300</span></p>
                </div>
            </div>
        </Hoc>
    );
}
export default CartProduct