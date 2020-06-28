import React from 'react';


import './categoriesComponent.css'
import Hoc from '../../../../Hoc/hoc'
const CategoriesComponent=(props)=>{
    return(
        <Hoc class="categories">
            {
                props.links.map((link,i)=>{
                return  <p key={i}>{link}</p>
                })
            }
        
        
        
         

        </Hoc>
    );
}
export default CategoriesComponent;