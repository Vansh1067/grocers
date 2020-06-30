import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import './descriptionComponent.css'
import DescriptionCard from './decriptionCard/decriptionCard'
const DescriptionComponent=(props)=>{
    return(
        <Hoc class="descriptionContainer">
           <p>Product Details</p>
           <div>
           <DescriptionCard title="Key Features">Kills Dengue and Malaria mosquitoes 30% faster
Unique thermal cut-off designed to shut off if it over-heats
Rotating deck enables use in vertical and horizontal outlets
Covers the entire room and lets you enjoy peaceful sleep</DescriptionCard>
           <DescriptionCard title="Unit">6x45 ml</DescriptionCard>
           <DescriptionCard title="Packaging Type">Refill</DescriptionCard>
           <DescriptionCard title="Manufacturer Details">S C Johnson Products Private Limited, Regd Office : 5th Floor, plot no 68, Sector -44, Gurgaon, Haryana, 122003</DescriptionCard>
           <DescriptionCard title="Seller">LA Super Retail Pvt Ltd (https://bit.ly/2QuoDoe)</DescriptionCard>
           <DescriptionCard title="Description">Never let a buzzing mosquito disrupt your peace again with the All Out Mosquito Repellent Refill. Don’t live your best moments fearing diseases like malaria and dengue anymore and trust All Out to be your shield against it. Sensitive to your presence, it does not harm the air you breathe by maintaining the sanctity of your home. The refill is really enough for you to be rest assured for a long time to come. From the minute you switch it on, it starts acting to your rescue and gives your family the protection you seek.</DescriptionCard>


           

           </div>
          
        </Hoc>
    );
}
export default DescriptionComponent
