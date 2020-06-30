import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import './detailsComponent.css'
import img from '../../../assest/promo.jpg'

const DetailsComponent=(props)=>{
    return(
        <Hoc class="detailsContainer">
         <h1>Title</h1>
        
         <div class="price">
            <h4>Product MRP : <span> $520</span> </h4>
            <h2>Selling Price :<span> $500</span></h2>
            <p>(inclusion all taxes)</p>
         </div>
         <div class="availabel">
             <p>Available in :</p>
             <span>100gm</span>
             <span>200gm</span>

         </div>
         <button>Add To Cart</button>
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
