import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './cardHeadingComponent.css'
import Hoc from '../../../Hoc/hoc';
import CategoriesComponent from './categoriesComponent/categoriesComponent'
const CardHeadingComponent=(props)=>{
    return(
        <Hoc class="cardHeading">
            
            <div class="heading">
                  <h3>{props.title}</h3>
            </div>   
                
           <div class="filter">
            <CategoriesComponent links={props.links}/>
           </div>

            <div class="arrow">
                <FontAwesomeIcon icon={faArrowLeft}/>
                <FontAwesomeIcon icon={faArrowRight}/>

            </div>
        </Hoc>
    );
}
export default CardHeadingComponent;