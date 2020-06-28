import React from 'react';

import './categoriesCardComponent.css'
import Hoc from '../../Hoc/hoc';
import CardHeading from './cardHeadingComponent/cardHeadingComponent'
import CardBodyComponent from './cardBodyComponent/cardBodyComponent'
import ProductComponent from './productCardComponent/productCardComponent'
import img from '../../assest/Capture.PNG'
import img2 from '../../assest/Capture1.PNG'

const CategoriesCardComponent=(props)=>{
    return(
        <Hoc class="categoriesCard">
            <CardHeading title={props.title} links={props.link}/>
            <CardBodyComponent >
               { props.product.map((product,i)=>{
              
                return <div key={i}><ProductComponent title={product.title} price={product.price} img={(Math.random()>0.5?img:img2)}/></div>
               })
               }
            </CardBodyComponent>
        </Hoc>
    );
}
export default CategoriesCardComponent;