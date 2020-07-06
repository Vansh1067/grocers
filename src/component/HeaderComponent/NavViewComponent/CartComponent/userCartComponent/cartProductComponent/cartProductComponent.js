import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './cartProductComponent.css'
import Hoc from '../../../../../../Hoc/hoc';
import img from '../../../../../../assest/Capture.PNG'
const CartProduct=(props)=>{
    const product=props.product;
    const offer=((product.discPrice-(product.price))/(product.discPrice))*100;

    return(
        <Hoc>
            <div class='userCard'>
                <FontAwesomeIcon className="cartIcons" onClick={()=>{props.deleteHandler(product.id)}}icon={faTimes}/>
                <div class="cardImage">
                    <img src={img}/>
                </div>
                <div class="UUsercardBody">
                   {product.discPrice? <p id="UOffer">Save {offer.toFixed(0)}%</p>:null}
                    <p>{product.title}</p>
                      <p id="Ustatus">  <span><FontAwesomeIcon icon={faCheckCircle}/></span>{product.status }</p>
    <p>${product.price} {product.discPrice?<span class="discount">{`$ ${product.discPrice}`}</span>:null}</p>
    <p>{product.Qty}</p>
                </div>
            </div>
        </Hoc>
    );
}
export default CartProduct