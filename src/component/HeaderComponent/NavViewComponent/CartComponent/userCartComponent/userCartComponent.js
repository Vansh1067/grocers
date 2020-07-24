import React, { Component, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartArrowDown,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './userCartComponent.css'
import Hoc from '../../../../../Hoc/hoc'
import {connect, useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as Action from '../../../../../store/cart/action'
import * as Actions from '../../../../../store/Checkout/action'
import * as Action1 from '../../../../../store/auth/action'


import CartProduct from './cartProductComponent/cartProductComponent';
import { saveOrderDetails } from '../../../../../store/Checkout/action';
const UserCartComponent =props=>{
    const [sum,setSum]=useState(0)
    const [DiscSum,setDiscSum]=useState(0)
    const [delivery,setdelivery]=useState(0)
    const [cartitems,setcartitems]=useState(props.CART.items)
    const [totalitems,settotalitems]=useState(props.CART.items.length)
    const dispatch=useDispatch();
    const auth=useSelector(state=>state.auth)
     
    let history=useHistory();


   
    
 
  
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
      
const CheckoutHandler=()=>{
    if(!auth.isAuth){
        dispatch(Action1.popup(auth.toggleOpen))
        props.click()
        return
    }
    const OrderSummary={items:DiscSum,Delivery:delivery,Total:DiscSum+delivery,savings:DiscSum-sum,OrderTotal:sum+delivery}
    
    props.SaveOrderDetails(OrderSummary)
    history.push('/checkout');
    props.click()
}
  



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

                        <button onClick={CheckoutHandler}>
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

const mapDispatchToProps=dispatch=>{
    return {

        
        AddToCart:(p,q,a)=>dispatch(Action.AddToCart(p,q,a)),
        DeleteFromCart:(id)=>dispatch(Action.DeleteFromCart(id)),
        SaveOrderDetails:(details)=>dispatch(Actions.saveOrderDetails(details))

       

    }
}
export default connect(null,mapDispatchToProps)(UserCartComponent)