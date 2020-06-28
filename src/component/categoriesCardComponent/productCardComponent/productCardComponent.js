
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './productCardComponent.css'
import Hoc from '../../../Hoc/hoc'
import img from '../../../assest/Capture.PNG'
import img2 from '../../../assest/Capture1.PNG'
const ProductCardComponent=(props)=>{
    const product=props.product;
    console.log(props.product)
    const offer=((product.discPrice-(product.price))/(product.discPrice))*100
    return(
        <Hoc class="Card">
               {product.discPrice?<p class="Offer">Save {offer.toFixed(0)}%</p>:null}
                <div class="imgBody">
                    <img src={(Math.random()>0.5?img:img2)}/>
                    <p>{product.title}</p>
                </div>
                <div class="priceBody">
                    {product.price?(<div>
                        <p>${product.price}  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                        <button>Buy Now</button>
                        <div class="Cart">
                        <p>Qty</p>
                        <input type="text" value="1"/>
                        <FontAwesomeIcon icon={faCartPlus}/>
                        </div>
                        </div>):null}
                    
                </div>
        </Hoc>
    );
}
export default ProductCardComponent