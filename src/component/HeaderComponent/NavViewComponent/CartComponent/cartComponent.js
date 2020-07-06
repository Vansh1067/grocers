import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';

import * as Action from '../../../../store/cart/action'
import './cartComponent.css'
import Hoc from '../../../../Hoc/hoc';
import UserCartComponent from './userCartComponent/userCartComponent'
const CartComponent=(props)=>{
     console.log(props)
    const [isOpen,setIsOpen]=useState(false)
    const TotalProduct=props.cart;
    useEffect(()=>{
props.Cart()
    },[])
    const toggleHandler=()=>{
            setIsOpen(!isOpen)
    }
    return(
        <Hoc className="cart">
            <div className="cartbox">
                <div className="icon" >
                    
                <FontAwesomeIcon onClick={toggleHandler} icon={faShoppingCart}/>

                            <span className="k">{TotalProduct.length}</span>

                </div>
                <p>My Cart</p>
            </div>

           {isOpen ? <UserCartComponent cart={props.cart} Cart={props.Cart} 
           AddToCart={props.AddToCart} DeleteFromCart={props.DeleteFromCart} click={toggleHandler}/>:null}
       
        </Hoc>
    );
}
const mapStateToProps=(state)=>{
 
    return{
        cart:state.cart.cart,
        
    }
}
const mapDispatchToProps=dispatch=>{
    return {

        Cart:()=>dispatch(Action.fetchCart()),
        AddToCart:()=>dispatch(Action.fetchCart()),
        DeleteFromCart:(id)=>dispatch(Action.DeleteFromCart(id))

       

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartComponent)