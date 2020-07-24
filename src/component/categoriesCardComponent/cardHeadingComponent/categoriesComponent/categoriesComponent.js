import React from 'react';
import {NavLink} from 'react-router-dom'
import './categoriesComponent.css'
import Hoc from '../../../../Hoc/hoc'
const CategoriesComponent=(props)=>{
    return(
        <Hoc class="categories">
            {
                props.links.map((link)=>{
                    
                return  <NavLink to={{pathname:`/products/${link.id}`}} key={link.id}>{link.title}</NavLink>
                })
            }
    </Hoc>
    );  
}
export default CategoriesComponent;