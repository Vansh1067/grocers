import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './ProductDetailContainer.css'
import Hoc from '../../Hoc/hoc';
import ProductDetailComponent from '../../component/productDetailComponent/productDetailComponent'
const ProductDetailContainer=(props)=>{
    return(
        <Hoc class="section">
            <ProductDetailComponent/>
        </Hoc>
    );
}
export default ProductDetailContainer
