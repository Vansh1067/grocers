import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCartArrowDown,faCaretRight} from '@fortawesome/free-solid-svg-icons'
import './userCartComponent.css'
import Hoc from '../../../../../Hoc/hoc'
import CartProduct from './cartProductComponent/cartProductComponent'
class UserCartComponent extends Component{
    constructor(props){
        super(props)
        this.sum=0;
        this.DiscSum=0;
        this.delivery=0;
    }
    
 
  
   updateCheckOutBox(){
       this.sum=0;
       this.DiscSum=0;
       this.delivery=0;
       const CartProducts=this.props.cart;
       CartProducts.forEach((product)=>{
           this.sum+=product.price;
           this.DiscSum+=product.discPrice;

       })
       this.DiscSum<500&&this.DiscSum>0?this.delivery=10:this.delivery=0;
     

      
   }
   render(){
    this.updateCheckOutBox()
  
  

    return(
        <Hoc>
            <div class="userCart">
                <div class="cartheader">
                <h3>My Cart <span >({this.props.cart.length} item)</span></h3>
                <FontAwesomeIcon className="userIcon" onClick={this.props.click} icon={faTimes} />
                </div>
                <div class="ProductArea">
                   { this.props.cart.length?this.props.cart.map((product,i)=>{
                            return    <CartProduct deleteHandler={this.props.DeleteFromCart} key={i}product={product}/>
                    }):<h4>No Product In your Cart</h4>}
                
                </div>
        <div class="priceSummary">
                    <div>
                        <p>Sub Total</p>
                        <p>${this.DiscSum}</p>
                    </div>
                    <div>
                        <p>Delivery Charges</p>
                        <p>${this.delivery}</p>
                    </div>
                    <div>
                        <p style={{fontWeight:'bold'}}>Your Total Savings</p>
                        <p>${this.DiscSum-this.sum} ({(((this.DiscSum-this.sum)/this.DiscSum)*100).toFixed(0)| 0 }%)</p>
                    </div>
                    <div class="button">
                        <button>
                            <div>
                            <FontAwesomeIcon icon={faCartArrowDown}/>
                            <span>Proceed to Checkout</span>
                            </div>
                            <p>${this.sum+this.delivery} &nbsp;<FontAwesomeIcon icon={faCaretRight}/></p> 
                          
                        </button>
                    </div>
                </div>
            </div>
        </Hoc>
    );
                }
}

export default UserCartComponent