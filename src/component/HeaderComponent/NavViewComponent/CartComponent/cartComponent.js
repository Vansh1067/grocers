import React, { useState, useEffect, useCallback, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Checkout from '../../../Checkout/checkout'

import * as Action from '../../../../store/cart/action'
import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc';
import UserCartComponent from './userCartComponent/userCartComponent'
import { useSelector, useDispatch } from 'react-redux';

const CartComponent =props=>{
    const [isOpen,setIsopen]=useState(false);
    const [totalItems,setTotalItems]=useState(0)
    const dispatch=useDispatch();
    const CartItems=useSelector(state=>state.cart.cart)
    console.log(CartItems)
  

    const toggleHandler=()=>{
          setIsopen(!isOpen)
         
    }
   useEffect(()=>{

        dispatch(Action.fetchCart())
        
    },[])
  useEffect(()=>{
            if(CartItems.items.length>=0){
                        setTotalItems(CartItems.items.length)
                }
                
          
       
    })


  
    return(
        <Hoc className="cart">

            <div className="cartbox">
                <div className="icon" >
                    
                <FontAwesomeIcon onClick={toggleHandler} icon={faShoppingCart}/>

                            <span className="k">{totalItems}</span>

                </div>
                <p>My Cart</p>
            </div>

           {isOpen ? <UserCartComponent  CART={CartItems} click={toggleHandler}/>:null}
       
        </Hoc>
    );

}

export default CartComponent;