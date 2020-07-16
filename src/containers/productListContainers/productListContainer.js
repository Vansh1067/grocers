import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import * as Action from '../../store/product/action'

import './productListContainer.css'
import Hoc from '../../Hoc/hoc'
import ProductListComponent from '../../component/productListComponent/productListComponent';

const ProductListContainer=(props)=>{
       
  
        const Code=+props.match.params.id;
        console.log(Code)
        useEffect(()=>{
            props.Categories();
            props.Product();

        },[])
        const Cat={...props.categories.find(cat=>cat.code==Code)}
        let products;
        let title;
        if(Code>0){
            products=props.product.filter(prod=>prod.categories==Code);
            title=Cat.title

        }else{
            products=props.product;
            title="All Products"
        }
        console.log(products)
    return(
        <Hoc class="section">
            <ProductListComponent title={title} product={products}/>
        </Hoc>
    );
}
const mapStateToProps=state=>{
    return {
        product:state.products.product,
        categories:state.products.categories
    }
}
const mapDispatchToProps=dispatch=>{
return {
    Product:()=>dispatch(Action.fetchProduct()),
    Categories:()=>dispatch(Action.fetchCategories()),
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer)