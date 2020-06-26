import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc'
const CartComponent=(props)=>{
    return(
        <Hoc className="cart">
            <div class="cartbox">
                <div class="icon" >
                    
                <FontAwesomeIcon icon={faShoppingCart}/>

                <span class="k">5</span>

                </div>
                <p>My Cart</p>
            </div>
       
        </Hoc>
    );
}
export default CartComponent