import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './cardHeadingComponent.css'
import Hoc from '../../../Hoc/hoc';
import CategoriesComponent from './categoriesComponent/categoriesComponent'
const CardHeadingComponent=(props)=>{
    const scrollHandler=(dir,event)=>{
            console.log(document.getElementsByClassName('cardBody'))
      
    }
    return(
        <Hoc class="cardHeading">
            
            <div class="heading">
                  <h3>{props.title}</h3>
            </div>   
                
            {props.links? <div class="filter">
            <CategoriesComponent links={props.links}/>
           </div>:null}

           {props.arrowHidden?null: <div class="arrow">
                <FontAwesomeIcon icon={faArrowLeft} onClick={(event)=>{scrollHandler('left',event)}}/>
                <FontAwesomeIcon icon={faArrowRight} onClick={()=>{scrollHandler('right')}}/>

            </div>}
        </Hoc>
    );
}
export default CardHeadingComponent;