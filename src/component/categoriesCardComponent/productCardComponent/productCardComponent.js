
import React, { useState } from 'react';
import {connect} from 'react-redux';

import * as Action from '../../../store/cart/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import styled from 'styled-components'
import './productCardComponent.css'
import img from '../../../assest/Capture.PNG'
import img2 from '../../../assest/Capture1.PNG'
const ProductCardComponent=(props)=>{
    const [quantity,setQuantity]=useState(1)

    const product=props.product;
   

    const offer=((product.discPrice-(product.price))/(product.discPrice))*100;
    const List=props.list
    return(
        <Hoc class={`Card ${List?'ListCard':null}`}>
               {product.discPrice?<p class="Offer">Save {offer.toFixed(0)}%</p>:null}
                <div class={`imgBody ${List?'ListimgBody':null}`}  >
                    <img src={(Math.random()>0.5?img:img2)}/>
                </div>
                <div  class={`priceBody ${List?'ListpriceBody':null}`}>
                    <p>{product.title}</p>
                    {props.desc?<p style={{textAlign:'justify',color:'indigo'}}>na ncl kasc k c lk lscklk l cll cslk slk sl clk lcsklk sl</p>:null}
                    {product.price?(<div>
                        <p>MRP ${product.price}  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                        <div class={`Cart ${List?'ListCart':null}`}>
                        <p>Qty</p>
                        <input type="text" value={quantity} onChange={(event)=>setQuantity(event.target.value)}/>
                        <FontAwesomeIcon className={'cartIcon'} onClick={()=>props.AddToCart(props.product,quantity)} icon={faCartPlus}/>
                        </div>
                        <button>Buy Now</button>

                        </div>):null}
                    
                </div>
        </Hoc>
    );
}

const mapDispatchToProps=dispatch=>{
    return {

       
        AddToCart:(product,qty)=>dispatch(Action.AddToCart(product,qty)),
       

       

    }
}
export default connect(null,mapDispatchToProps)(ProductCardComponent)