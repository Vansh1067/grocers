import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import './detailsComponent.css'
import { useDispatch ,useSelector} from 'react-redux';
import * as Actions from '../../../store/cart/action'
import * as Action1 from '../../../store/auth/action'


const DetailsComponent=(props)=>{
    const [AvalProducts,setAvalProducts]=useState([])
    const auth=useSelector(state=>state.auth)
    const dispatch=useDispatch()
    const product={...props.product}
  console.log(product)
    const offer=((product.MRP-(product.sellingPrice))/(product.MRP))*100;
    
  useEffect(()=>{
    setAvalProducts(product.AvailabelDetails);
    console.log(AvalProducts)
  })
  const AddToCartHandler=()=>{
    if(!auth.isAuth){
        dispatch(Action1.popup(auth.toggleOpen))
   
        return
    }
    dispatch(Actions.AddToCart(product,1,1))
}
    return(
        <Hoc class="detailsContainer">
         <h1>{product.title}</h1>
        
         <div class="price">
            <h4>Product MRP : <span> ${product.MRP}</span> </h4>
            <h2>Selling Price :<span> ${product.sellingPrice}</span></h2>
            <p>(inclusion all taxes)</p>
            {product.specialOffer?<p className="offer">Save {offer.toFixed(0)}%</p>:null}
         </div>
         <div class="availabel">
             <p>Available in :</p>
    {AvalProducts?AvalProducts.map((prod,i)=>{
             
             return <span key={i}>{prod}</span>
             }):null} 
       

         </div>
         <button onClick={AddToCartHandler } >Add To Cart</button>
        <div class="ad">
            <h4>Why Shop from Grocers?</h4>
            <div class="adBox">
                <h5>Easy Return &amp; refunds</h5>
                <p>Return products at doorstep and get refund in seconds.</p>
            </div>
            <div class="adBox">
                <h5>Lowest price guaranteed</h5>
                <p>Get difference refunded if you find it cheaper anywhere else.</p>
            </div>
            <div class="adBox">
                <h5>Quality Assured</h5>
                <p>Get difference refunded if you find it cheaper anywhere else.</p>
            </div>
        </div>
        </Hoc>
    );
}
export default DetailsComponent
