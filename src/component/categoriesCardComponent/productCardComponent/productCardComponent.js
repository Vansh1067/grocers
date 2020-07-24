
import React, { useState, useRef } from 'react';
import {connect, useSelector,useDispatch} from 'react-redux';

import {withRouter,Redirect,useHistory,Router} from 'react-router-dom'
import * as Action from '../../../store/cart/action'
import * as Action1 from '../../../store/auth/action'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import styled from 'styled-components'
import './productCardComponent.css'
import img from '../../../assest/Capture.PNG'
import img2 from '../../../assest/Capture1.PNG'
import Input from './Input/input';



const ProductCardComponent=(props)=>{
    let QTY=1;
  
    const Products=useSelector(state=>state.products.product)
    const [quantity,setQuantity]=useState(1)
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch();
   
 
    let history=useHistory();
    let product;
    if(props.fav){
        product={...Products.find(product=>product._id===props.product.productId)}
    }else{
        product={...props.product};

    }

    const DetailHandler=()=>{
      
        if(props.product.code>=0){
                history.push('/products/'+product.code);

        }else{
            history.push('/product/'+product._id.toString());

        }

        
    }

    const offer=((product.MRP-(product.sellingPrice))/(product.MRP))*100;
    const List=props.list
    const qtyHandler=(v)=>{
            QTY=v;
          
    }
    const AddToCartHandler=()=>{
        if(!auth.isAuth){
            dispatch(Action1.popup(auth.toggleOpen))
       
            return
        }
     
        props.AddToCart(props.product,QTY,QTY) 
    }
    return(
        <Hoc class={`Card ${List?'ListCard':null}`} >
      
               {product.specialOffer?<p class="Offer">Save {offer.toFixed(0)}%</p>:null}
                <div class={`imgBody ${List?'ListimgBody':null}`}  >
                    <img src={(Math.random()>0.5?img:img2)} onClick={DetailHandler}/>
                </div>
   
                <div  class={`priceBody ${List?'ListpriceBody':null}`}>
                    <p>{product.title}</p>
                  {List?<p style={{textAlign:'justify',color:'indigo'}}>{product.Details.description}</p>:null}  
                    {product.sellingPrice?(<div>
                        <p>MRP ${product.sellingPrice}  {product.MRP?<span class="discount">${product.MRP}</span>:null}  </p>
                        <div class={`Cart ${List?'ListCart':null}`}>
                        <p>Qty :</p>
                    {!props.order?<Input  type="text" value={QTY} qty={qtyHandler} />:<p>{props.product.quantity}</p>}
                    {!props.order?<FontAwesomeIcon className={'cartIcon'}  icon={faCartPlus}/>:null}
                        </div>
                       {!props.order? <button onClick={AddToCartHandler}  >Add to Cart</button>:null}

                        </div>):null}
                    
                </div>
        </Hoc>
    );
}

const mapDispatchToProps=dispatch=>{
    return {

       
        AddToCart:(product,qty,qty2)=>dispatch(Action.AddToCart(product,qty,qty2)),
       

       

    }
}
export default connect(null,mapDispatchToProps)(withRouter(ProductCardComponent))