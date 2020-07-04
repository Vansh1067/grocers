import React, { useEffect } from 'react';

import './productListContainer.css'
import Hoc from '../../Hoc/hoc'
import ProductListComponent from '../../component/productListComponent/productListComponent'
const ProductListContainer=(props)=>{
   const titles= {
    '0':'All Products',
   '1': 'Baby Care',
    '2':'Beverages',
    '3': 'Cleaning & Household',
    '4' :'Daily Needs',
    '5':'Dairy & Bakery',
    '6': 'Fruits',
    '7' :'Oil & Spices',
   '8' :'Personal Care',
  '9' :'Rice Grains',
 '10' :'Snaks & Foods',
 '11':'Featured',
 '12':'Best Seller',
 '13':'Latest'
  }
  
        
 console.log(props)
    return(
        <Hoc class="section">
            <ProductListComponent title={titles[props.match.params.code]}/>
        </Hoc>
    );
}
export default ProductListContainer