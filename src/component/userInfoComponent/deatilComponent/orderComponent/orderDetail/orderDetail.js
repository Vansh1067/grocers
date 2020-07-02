import React from 'react';

import './orderDetail.css';
import Hoc from '../../../../../Hoc/hoc'
import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
const OrderDetail =(props)=>{
    const product={title:'Baby Care',price:25}
        return <Hoc class="orderDetailCard">
                <h3>Wheat Ashirvad Atta</h3>
                <div class="orderimage">
                    <img src={(Math.random()>0.5?img:img2)}/>
                    {product.price?(<div class="OrderPrice">
                        <p>MRP <span>$ {product.price}</span>  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                        <p>Qty <span>5</span></p>
                        <h4>Total Amount <span> $500</span></h4>
                        <h4>Order Date<span> 12-2-2019</span></h4>
                        <h4>Order Id <span> 2510s51cs0s545</span></h4>
                        <h4>Payment Method <span> Credit Card</span></h4>
                        <h4>Order By<span>Vansh</span></h4>
                    </div>):null}
                        
                </div>
                <div class="shipping">
                    <h3>Shipping Address</h3>
                    <p>Vansh Tandon</p>
                    <address>
                    <p>Room no.103, bhagirathi hostel</p>
                    <p>G.b pant engineering college</p>
                    <p>Pauri garhwal, UTTARAKHAND 246194</p>
                    <p>India</p>
                    </address>
                </div>
                <button>InVoice</button>
             
        </Hoc>
}

export default OrderDetail;