import React from 'react';

import './productListContainer.css'
import Hoc from '../../Hoc/hoc'
import ProductListComponent from '../../component/productListComponent/productListComponent'
const ProductListContainer=(props)=>{
    return(
        <Hoc class="section">
            <ProductListComponent/>
        </Hoc>
    );
}
export default ProductListContainer