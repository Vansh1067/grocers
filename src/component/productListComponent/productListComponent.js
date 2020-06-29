import React from 'react';

import './productListComponent.css'
import Hoc from '../../Hoc/hoc';
import CardHeadingComponent from '../categoriesCardComponent/cardHeadingComponent/cardHeadingComponent';
import ProductComponent from '../categoriesCardComponent/productCardComponent/productCardComponent';
import FilterComponent from './filterComponent/filterComponent'
const productListComponent=(props)=>{
    const product=[{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5},{title:'Baby Care',price:25},{title:'Banana',price:15},{title:'Oil',price:250},{title:'Chips',price:5}]
    return(
        <Hoc>
            <CardHeadingComponent title="All Products" arrowHidden={true}/>
            <FilterComponent/>
           <div class="cardBodyList">

          
            { product.map((product,i)=>{
              
              return <div key={i}><ProductComponent product={product}  /></div>
             })
             }
            </div>
            
        </Hoc>
    );
}
export default productListComponent