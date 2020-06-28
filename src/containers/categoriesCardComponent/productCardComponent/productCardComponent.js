
import React from 'react';


import './productCardComponent.css'
import Hoc from '../../../Hoc/hoc'
const ProductCardComponent=(props)=>{
    return(
        <Hoc class="Card">
            
                <div class="imgBody">
                    <img src={props.img}/>
                    <p>{props.title}</p>
                </div>
                <div class="priceBody">
                    {props.price?(<div>
                        <p> {props.price}</p><button>Buy Now</button><button id="cart">Add To Cart</button></div>):null}
                    
                </div>
        </Hoc>
    );
}
export default ProductCardComponent