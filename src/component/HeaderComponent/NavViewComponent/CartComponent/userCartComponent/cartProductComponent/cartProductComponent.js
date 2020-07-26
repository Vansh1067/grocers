import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes,faCheckCircle,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import './cartProductComponent.css'
import Hoc from '../../../../../../Hoc/hoc';
import img from '../../../../../../assest/Capture.PNG'
import { useSelector } from 'react-redux';

const CartProduct=(props)=>{
    const product=props.product;
    console.log(product)
   const Products=useSelector(state=>state.products.product);
    const Product=Products.find((prod)=>prod._id==product.productId); 
   
    const offer=((Product.MRP-(Product.sellingPrice))/(Product.MRP))*100;

    return(
        <Hoc>
            <div className='userCard2'>
                <FontAwesomeIcon className="cartIcons2" icon={faTimes} onClick={()=>props.deleteHandler(Product._id)}/>
                <div className="cardImage2">
                    <img src={img}/>
                </div>
                <div className="UUsercardBody2">
                   {Product.specialOffer? <p id="UOffer2">Save {offer.toFixed(0)}%</p>:null}
                    <p>{Product.title}</p>
                    <p id="Ustatus2">  <span><FontAwesomeIcon icon={faCheckCircle}/></span>{'Available'}</p>
                    <p>Selling Price: ${Product.sellingPrice} {Product.MRP?<span className="discount2">{`$ ${Product.MRP}`}</span>:null}</p>
                   
                <div className={'Quantity2'}>
                        <p style={{'margin-right':'10px'}}>Qty: </p>
                        <FontAwesomeIcon className={'cartIcon'} icon={faMinus} onClick={()=>{props.AddHandler(Product,product.quantity,-1)}}/>
                        <p> {product.quantity} </p>
                        <FontAwesomeIcon className={'cartIcon'} icon={faPlus} onClick={()=>{props.AddHandler(Product,product.quantity,1)}}/>
                </div>
                </div>
               
            </div>
        </Hoc>
    );
}
export default CartProduct