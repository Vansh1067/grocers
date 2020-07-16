import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../../../../../store/order/action'
import './orderDetail.css';
import Hoc from '../../../../../Hoc/hoc'
import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
const OrderDetail =(props)=>{
    const id=props.match.params.id;
    useEffect(()=>{
        props.OrderDetail(id)
    },[])
    const product=props.orderItem
        return <Hoc class="orderDetailCard">
                <h3>{product.title}</h3>
                <div class="orderimage">
                    <img src={(Math.random()>0.5?img:img2)}/>
                    {product.price?(<div class="OrderPrice">
                        <p>MRP <span>$ {product.price}</span>  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                        <p>Qty <span>{product.qty}</span></p>
                        <h4>Total Amount <span>{product.price*product.qty}</span></h4>
                        <h4>Order Date<span> {product.date}</span></h4>
                        <h4>Order Id <span> {product.id}</span></h4>
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
const mapStateToProps=state=>{
return {
    orderItem:state.order.orderDetail

}
}
const mapDispatchToProps=dispatch=>{
    return {
        OrderDetail:(id)=>dispatch(Actions.fetchDetail(+id))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OrderDetail));