import React from 'react'

import './orderBox.css';
import Hoc from '../../../../../Hoc/hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

import img from '../../../../../assest/Capture.PNG'
import img2 from '../../../../../assest/Capture1.PNG'
const OrderBox =(props)=>{
    const product=props.product;
    console.log(props.product)
    const offer=((product.discPrice-(product.price))/(product.discPrice))*100
        return <Hoc class="Card">
                            <h4><span>Delivered</span>  25-Feb-2019</h4>
          
                <div class="imgBody">
                    <img src={(Math.random()>0.5?img:img2)}/>
                </div>
                <div class="priceBody">
                    <p>{product.title}</p>
                    <p>sjkfhn snckjsn jscns sncsn snsnc </p>
                    {product.price?(<div>
                        <p>${product.price}  {product.discPrice?<span class="discount">${product.discPrice}</span>:null}  </p>
                       
                        <p>Qty <span>5</span></p>
                        <button>View Details</button>

                        </div>):null}
                    
                </div>
                <div class="sumDetail">
                    <h4>Total $500</h4>
                    <p>Order Date <span>20-feb-2019</span></p>
                 

                </div>
        </Hoc>
}
export default OrderBox