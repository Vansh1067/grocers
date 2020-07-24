import React, { useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import * as Actions from '../../../../../store/order/action'
import './orderDetail.css';
import Hoc from '../../../../../Hoc/hoc'
import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
import ProductCardComponent from '../../../../categoriesCardComponent/productCardComponent/productCardComponent'
const OrderDetail =(props)=>{
    const Orders=useSelector(state=>state.order.orders)

    const id=props.match.params.id;
 
    const product=Orders.find(order=>order._id===id)
    console.log(product)
        return <Hoc class="orderDetailCard">

                <div class="orderimage">
                  
                   <div class="OrderPrice">
                       
                        <p>Total Items <span>{product.totalquantity}</span></p>
                        <h4>Total Amount <span>{product.totalAmount}</span></h4>
                        <h4>Order Date<span> {product.OrderDate}</span></h4>
                        <h4>Order Id <span>#{product._id}</span></h4>
                        <h4>Payment Method <span> Credit Card</span></h4>
                        <h4>Order By<span>Vansh</span></h4>
                    </div>
                        
                </div>
                <div >
                    <h3>Products</h3>
                    <div className="productArray">
                    {product.productId.map(product => {
                        return <ProductCardComponent product={product} order={true} fav={true}/>
                    })}
                    </div>
                    
                </div>
                <div class="shipping">
                    <h3>Shipping Address</h3>
                    <p>{product.Address.fName} {product.Address.lName}</p>
                    <address>
                    <p>{product.Address.Address1} </p>
                    <p>{product.Address.Address2}</p>
                    <p>{product.Address.Address3}</p>

                    <p>{product.Address.city}, {product.Address.state} {product.Address.zipCode}</p>
                    <p>{product.Address.country}</p>
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