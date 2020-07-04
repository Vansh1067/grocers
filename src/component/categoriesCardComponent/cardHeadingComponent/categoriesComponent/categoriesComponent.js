import React from 'react';


import './categoriesComponent.css'
import Hoc from '../../../../Hoc/hoc'
const CategoriesComponent=(props)=>{
    return(
        <Hoc class="categories">
            {
                props.links.map((link)=>{
                return  <a href={`/products/${link.id}`} key={link.id}>{link.title}</a>
                })
            }
    </Hoc>
    );
}
export default CategoriesComponent;