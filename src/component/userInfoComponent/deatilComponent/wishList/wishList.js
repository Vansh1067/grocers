import React from 'react'
import ProductCardComponent from '../../../categoriesCardComponent/productCardComponent/productCardComponent'

import Hoc from '../../../../Hoc/hoc';
const WishList =props=>{
    const product=[{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Baby Care',price:25},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Baby Care',price:25}]

    return (<Hoc className="wishList">
<h3>WishList</h3>
                <div className="wishProduct">
{
               
                product.map((product)=>{
                return <ProductCardComponent  product={product}/>

               })
           }
           </div>
</Hoc>)
    
}

export default WishList;