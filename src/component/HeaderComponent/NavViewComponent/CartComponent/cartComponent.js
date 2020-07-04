import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc';
import UserCartComponent from './userCartComponent/userCartComponent'
const CartComponent=(props)=>{
    const [isOpen,setIsOpen]=useState(false)
    const toggleHandler=()=>{
            setIsOpen(!isOpen)
    }
    return(
        <Hoc className="cart">
            <div className="cartbox">
                <div className="icon" >
                    
                <FontAwesomeIcon onClick={toggleHandler} icon={faShoppingCart}/>

                <span className="k">5</span>

                </div>
                <p>My Cart</p>
            </div>

           {isOpen ? <UserCartComponent click={toggleHandler}/>:null}
       
        </Hoc>
    );
}
export default CartComponent