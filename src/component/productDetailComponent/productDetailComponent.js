import React from 'react';
import {withRouter} from 'react-router-dom';


import './productDetailComponent.css'
import Hoc from '../../Hoc/hoc'
import ImageComponent from './ImageComponent/ImageComponent'
import DetailComponent from './detailsComponent/detailsComponent'
import DescriptionComponent from './descriptionComponent/descriptionComponent'
import ReviewComponent from '../ReviewComponent/ReviewComponent'
const ProductDetailComponent=(props)=>{
    const product=props.product
    console.log(product)
    return(
        <Hoc class="detailContainer">
           <div>
           <ImageComponent/>
            <DetailComponent product={product}/>
           </div>
            
           <div>
          <DescriptionComponent product={product.Details}/>

          </div>
          <div>
          <ReviewComponent reviews={product.reviews}/>

          </div>
          
         
            
        </Hoc>
    );
}

export default withRouter(ProductDetailComponent)
