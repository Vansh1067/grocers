import React from 'react';

import './categoriesCardComponent.css'
import Hoc from '../../Hoc/hoc';
import CardHeading from './cardHeadingComponent/cardHeadingComponent'
import CardBodyComponent from './cardBodyComponent/cardBodyComponent'
import ProductComponent from './productCardComponent/productCardComponent'


const CategoriesCardComponent=(props)=>{
    return(
        <Hoc class="categoriesCard">
            <CardHeading title={props.title} links={props.link}/>
            <CardBodyComponent >
               { props.product.map((product,i)=>{
              
                return <div key={i}><ProductComponent product={product}  /></div>
               })
               }
            </CardBodyComponent>
        </Hoc>
    );
}
export default CategoriesCardComponent;