import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import * as Action from '../../store/product/action'
import './ProductDetailContainer.css'
import Hoc from '../../Hoc/hoc';
import ProductDetailComponent from '../../component/productDetailComponent/productDetailComponent'
const ProductDetailContainer=(props)=>{
    const productId=props.match.params.id;
    useEffect(()=>{
        props.FetchDetail(productId);
        console.log('sjj')
    },[])
    console.log(props.prod)
    return(
        <Hoc class="section">
            <ProductDetailComponent product={props.prod}/>
        </Hoc>
    );
}
const mapStateToProps=state=>{
    return {
        prod:state.products.productDetail
    }
}
const mapDispatchToProps=dispatch=>{
return {
        FetchDetail:(id)=>{dispatch(Action.fetchProductDetail(id))}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailContainer)
