import React, { Component, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartArrowDown,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './userCartComponent.css'
import Hoc from '../../../../../Hoc/hoc'
import {connect, useSelector} from 'react-redux';

import * as Action from '../../../../../store/cart/action'
import CartProduct from './cartProductComponent/cartProductComponent'
const UserCartComponent =props=>{
    const [sum,setSum]=useState(0)
    const [DiscSum,setDiscSum]=useState(0)
    const [delivery,setdelivery]=useState(0)
    const [cartitems,setcartitems]=useState(props.CART.items)
    const [totalitems,settotalitems]=useState(props.CART.items.length)
    const [refresh,setrefresh]=useState(false)
        console.log(props.CART)


   
    
 
  
   const updateCheckOutBox=(cartitems)=>{
    
       
            let sum=0;
           let DiscSum=0;
           let delivery=0;
           cartitems.forEach((product)=>{
           
            sum +=product.sellingPrice*product.quantity;
            DiscSum+=product.MRP*product.quantity;

       })
       DiscSum<500&&DiscSum>0?delivery=10:delivery=0;
       setSum(sum);
       setDiscSum(DiscSum);
       setdelivery(delivery);
 
  
    }
    useEffect(()=>{
        updateCheckOutBox(cartitems);
        settotalitems(cartitems.length)
        setcartitems(props.CART.items)
       return ()=>{  setcartitems(props.CART.items)}
       })
      

  



    return(
        <Hoc>
            <div class="userCart">
                <div class="cartheader">
                <h3>My Cart <span >({totalitems} item)</span></h3>
                <FontAwesomeIcon className="userIcon" onClick={props.click} icon={faTimes} />
                </div>
                <div class="ProductArea">
                   { totalitems>0?cartitems.map((product,i)=>{
                            return    <CartProduct deleteHandler={(id)=>props.DeleteFromCart(id)}  AddHandler={(p,q,a)=>props.AddToCart(p,q,a)} key={i} product={product}/>
                    }):<h4>No Product In your Cart</h4>}
                
                </div>
        <div class="priceSummary">
                    <div>
                        <p>Sub Total</p>
                        <p>${DiscSum}</p>
                    </div>
                    <div>
                        <p>Delivery Charges</p>
                        <p>${delivery}</p>
                    </div>
                    <div>
                        <p style={{fontWeight:'bold'}}>Your Total Savings</p>
                        <p>${DiscSum-sum} ({(((DiscSum-sum)/DiscSum)*100).toFixed(0)| 0 }%)</p>
                    </div>
                    <div class="button">
                        <button>
                            <div>
                            <FontAwesomeIcon icon={faCartArrowDown}/>
                            <span>Proceed to Checkout</span>
                            </div>
                            <p>${sum+delivery} &nbsp;<FontAwesomeIcon icon={faCaretRight}/></p> 
                          
                        </button>
                    </div>
                </div>
            </div>
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
        AddToCart:(p,q,a)=>dispatch(Action.AddToCart(p,q,a)),
        DeleteFromCart:(id)=>dispatch(Action.DeleteFromCart(id))

       

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserCartComponent)