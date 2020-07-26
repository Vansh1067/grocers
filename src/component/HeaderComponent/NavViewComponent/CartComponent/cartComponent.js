import React, { useState, useEffect, useCallback, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Checkout from '../../../Checkout/checkout'

import * as Action from '../../../../store/cart/action'
import * as Action1 from '../../../../store/auth/action'

import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc';
import UserCartComponent from './userCartComponent/userCartComponent'
import { useSelector, useDispatch } from 'react-redux';

const CartComponent =props=>{
    const [isOpen,setIsopen]=useState(false);
    const [totalItems,setTotalItems]=useState(0)
    const dispatch=useDispatch();
    const CartItems=useSelector(state=>state.cart.cart)
    const auth=useSelector(state=>state.auth)

    console.log(CartItems)
  

    const toggleHandler=()=>{
          setIsopen(!isOpen)
         
    }
   useEffect(()=>{
        if(auth.isAuth){
            dispatch(Action.fetchCart())

        }
        dispatch(Action1.autoLogin()); 
        
    },[auth.isAuth])
  useEffect(()=>{
            if(CartItems){
                        setTotalItems(CartItems.items.length)
                }
                
          
       
    })


    useEffect(()=>{
           
             })
    return(
        <Hoc className="cart">

            <div className="cartbox">
                <div className="icon" >
                    
                <FontAwesomeIcon onClick={toggleHandler} icon={faShoppingCart}/>

                            <span className="k">{totalItems}</span>

                </div>
                <p className="mycart">My Cart</p>
            </div>

           {isOpen ? <UserCartComponent  CART={CartItems} click={toggleHandler}/>:null}
       
        </Hoc>
    );

}

export default CartComponent;