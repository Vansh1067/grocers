import React from 'react';

import Hoc from '../../../Hoc/hoc'
import './detailComponent.css'
import ProfileForm from './profileForm/profileForm'
import AddressForm from './addressForm/addressForm'
import ProductCardComponent from '../../categoriesCardComponent/productCardComponent/productCardComponent'
import OrderComponent from './orderComponent/orderComponent'
const DetailComponent=(props)=>{
    const product=[{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Baby Care',price:25}]

    return(
        <Hoc class="details">
            {/* <ProfileForm/>
            <AddressForm/>
            <OrderComponent/> */}
           <div class="wishList">
                <h3>WishList</h3>
                <div class="wishProduct">
{
               
                product.map((product)=>{
                return <ProductCardComponent  product={product}/>

               })
           }
                </div>
           
           </div>
        </Hoc>
    );
}
export default DetailComponent
