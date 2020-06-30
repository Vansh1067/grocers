import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './productDetailComponent.css'
import Hoc from '../../Hoc/hoc'
import ImageComponent from './ImageComponent/ImageComponent'
import DetailComponent from './detailsComponent/detailsComponent'
import DescriptionComponent from './descriptionComponent/descriptionComponent'
import ReviewComponent from '../ReviewComponent/ReviewComponent'
const ProductDetailComponent=(props)=>{
    return(
        <Hoc class="detailContainer">
           <div>
           <ImageComponent/>
            <DetailComponent/>
           </div>
            
           <div>
          <DescriptionComponent/>

          </div>
          <div>
          <ReviewComponent/>

          </div>
          
         
            
        </Hoc>
    );
}
export default ProductDetailComponent
