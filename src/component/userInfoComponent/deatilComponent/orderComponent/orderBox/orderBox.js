import React from 'react'

import './orderBox.css';
import Hoc from '../../../../../Hoc/hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'


import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
const OrderBox =(props)=>{
    const product=props.product;
  
   
        return <Hoc class="OCard">
          
            <h4>Delivered By 12*02*2019</h4>

            
                <div class="OimgBody">
                    <img src={(Math.random()>0.5?img:img2)}/>
                </div>
                <div class="OpriceBody">
                    <p>{product.title}</p>
                
                    {product.price?(<div>
                        <p>${product.price}  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                       
                        <p>Qty <span>5</span></p>
                        <h4>Total <span>$500</span></h4>
                        <h4>Order Date<span>12-2-2019</span></h4>
                        <button>View Details</button>

                        </div>):null}
                    
                </div>
                
             
        </Hoc>
}
export default OrderBox