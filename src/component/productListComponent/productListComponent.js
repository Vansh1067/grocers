import React, { useState } from 'react';

import './productListComponent.css';
import {withRouter} from 'react-router-dom'
import Hoc from '../../Hoc/hoc';
import CardHeadingComponent from '../categoriesCardComponent/cardHeadingComponent/cardHeadingComponent';
import ProductComponent from '../categoriesCardComponent/productCardComponent/productCardComponent';
import FilterComponent from './filterComponent/filterComponent';

const ProductListComponent=(props)=>{
    const [list,setList] = useState(true);
    console.log(props)
    const ViewHandler=()=>{
    
        const value=!list;
        setList(value);
        console.log(list)
    }
    
    return(
        <Hoc>
            <CardHeadingComponent title={props.title} arrowHidden={true}/>
            <FilterComponent onChange={ViewHandler}/>
           <div class={`cardBodyGrid ${list?'cardBodyList':null}`}>

          
            { props.product.map((product,i)=>{
              
              return <div key={i}><ProductComponent list={list} desc={true} product={product}  /></div>
             })
             }
            </div>
            <div class="orderFooter">
                    <p>Showing 1 to 10 of 15 entries </p>
                    <div class="pagination">
                        <a href="" class="Oshow">1</a>
                        <a href="">2</a>
                        <a href="">3</a>

                    </div>
                </div>
        </Hoc>
    );
}
export default withRouter(ProductListComponent)