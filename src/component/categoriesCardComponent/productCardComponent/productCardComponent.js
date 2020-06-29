
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
                </div>
                <div class="priceBody">
                    <p>{product.title}</p>
                    <p> anflhjlh akjbnkja acn kancs snalnl alaj al ajlkj lkkl akja lkjkl alkjcakl</p>
                    {product.price?(<div>
                        <p>${product.price}  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                        <div class="Cart">
                        <p>Qty</p>
                        <input type="text" value="1"/>
                        <FontAwesomeIcon className={'cartIcon'}icon={faCartPlus}/>
                        </div>
                        <button>Buy Now</button>

                        </div>):null}
                    
                </div>
        </Hoc>
    );
}
export default ProductCardComponent