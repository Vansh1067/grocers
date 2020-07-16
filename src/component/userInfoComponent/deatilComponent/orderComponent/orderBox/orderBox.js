import React from 'react'
import {withRouter} from 'react-router-dom'
import './orderBox.css';
import Hoc from '../../../../../Hoc/hoc'

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
                       
                        <p>Qty <span>{product.qty}</span></p>
                        <h4>Total <span>{product.price*product.qty}</span></h4>
                        <h4>Order Date<span>{product.date}</span></h4>
                        <p>Status :<span> {product.status}</span></p>

                        <br></br>
                        <a href={`/account/orders/`+product.id} id="orderDetailButton">View Details</a>

                        </div>):null}
                    
                </div>
                
             
        </Hoc>
}
export default withRouter(OrderBox)