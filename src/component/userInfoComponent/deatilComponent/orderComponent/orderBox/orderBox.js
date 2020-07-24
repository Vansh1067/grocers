import React, { useEffect } from 'react'
import {withRouter, Link} from 'react-router-dom'
import './orderBox.css';
import Hoc from '../../../../../Hoc/hoc'
import * as Action from '../../../../../store/order/action'
import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
import { useDispatch } from 'react-redux';
const OrderBox =(props)=>{
    const product=props.product;
    const dispatch=useDispatch()
const DeleteHandler=(id)=>{
    alert("are YOu sure")
dispatch(Action.deleteOrder(id))
alert("Order successfully cancel")
props.refresh()
}

   
        return <Hoc class="OCard">
          
            <h4>Delivered on {product.deliverDate}</h4>

            
                <div class="OimgBody">
                    <img src={(Math.random()>0.5?img:img2)}/>
                </div>
                <div class="OpriceBody">
                   
                
                        <div>
                        <h4>#{product._id} </h4>
                       
                        <p>Total items <span>{product.totalquantity}</span></p>
                        <h4>Total <span>{product.totalAmount}</span></h4>
                        <h4>Order Date <span> {product.OrderDate}</span></h4>
                        <p>Status :<span> {product.Status}</span></p>

                        <br></br>
                        <Link className="orderDetailButton" to={{pathname:`/account/orders/${product._id}`}} id="orderDetailButton">View Details</Link>
                        <button className="orderCancelButton"  onClick={()=>DeleteHandler(product._id)} id="orderDetailButton">Cancel</button>


                        </div>
                    
                </div>
                
             
        </Hoc>
}
export default withRouter(OrderBox)