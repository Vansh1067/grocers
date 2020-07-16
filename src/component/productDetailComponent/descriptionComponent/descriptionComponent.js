import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import './descriptionComponent.css'
import DescriptionCard from './decriptionCard/decriptionCard'
const DescriptionComponent=(props)=>{
   const product= {...props.product};
   
    return(
        <Hoc class="descriptionContainer">
           <p>Product Details</p>
           <div>
    <DescriptionCard title="Key Features">{product.keyFeatures}</DescriptionCard>
           <DescriptionCard title="Unit">{product.unit}</DescriptionCard>
           <DescriptionCard title="Packaging Type">{product.packagingType}</DescriptionCard>
           <DescriptionCard title="Manufacturer Details">{product.manufacturer}</DescriptionCard>
           <DescriptionCard title="Seller">{product.seller}</DescriptionCard>
    <DescriptionCard title="Description">{product.description}</DescriptionCard>


           

           </div>
          
        </Hoc>
    );
}
export default DescriptionComponent
