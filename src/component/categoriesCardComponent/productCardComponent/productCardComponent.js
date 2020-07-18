
import React, { useState } from 'react';
import {connect, useSelector} from 'react-redux';
import {withRouter,Redirect,useHistory,Router} from 'react-router-dom'
import * as Action from '../../../store/cart/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import styled from 'styled-components'
import './productCardComponent.css'
import img from '../../../assest/Capture.PNG'
import img2 from '../../../assest/Capture1.PNG'
const ProductCardComponent=(props)=>{
    const Products=useSelector(state=>state.products.product)
    const [quantity,setQuantity]=useState(1)
    let history=useHistory();
    let product;
    if(props.fav){
        product={...Products.find(product=>product._id===props.product.productId)}
    }else{
        product={...props.product};

    }

    const DetailHandler=()=>{
        if(product.code){
                history.push('/products/'+product.code);

        }else{
            history.push('/product/'+product._id.toString());

        }

        
    }

    const offer=((product.MRP-(product.sellingPrice))/(product.MRP))*100;
    const List=props.list
    
    return(
        <Hoc class={`Card ${List?'ListCard':null}`} >
               {product.specialOffer?<p class="Offer">Save {offer.toFixed(0)}%</p>:null}
                <div class={`imgBody ${List?'ListimgBody':null}`}  >
                    <img src={(Math.random()>0.5?img:img2)} onClick={DetailHandler}/>
                </div>
                <div  class={`priceBody ${List?'ListpriceBody':null}`}>
                    <p>{product.title}</p>
                  {List?<p style={{textAlign:'justify',color:'indigo'}}>{product.Details.description}</p>:null}  
                    {product.sellingPrice?(<div>
                        <p>MRP ${product.sellingPrice}  {product.MRP?<span class="discount">${product.MRP}</span>:null}  </p>
                        <div class={`Cart ${List?'ListCart':null}`}>
                        <p>Qty</p>
                        <input type="text" value={quantity} onChange={(event)=>setQuantity(event.target.value)}/>
                        <FontAwesomeIcon className={'cartIcon'} onClick={()=>props.AddToCart(props.product,quantity,quantity)} icon={faCartPlus}/>
                        </div>
                        <button>Buy Now</button>

                        </div>):null}
                    
                </div>
        </Hoc>
    );
}

const mapDispatchToProps=dispatch=>{
    return {

       
        AddToCart:(product,qty,qty2)=>dispatch(Action.AddToCart(product,qty,qty2)),
       

       

    }
}
export default connect(null,mapDispatchToProps)(withRouter(ProductCardComponent))