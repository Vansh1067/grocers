import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import './cardHeadingComponent.css'
import Hoc from '../../../Hoc/hoc';
import CategoriesComponent from './categoriesComponent/categoriesComponent'
const CardHeadingComponent=(props)=>{
    const scrollHandler=(dir,event)=>{
        const element=event.target.closest('.cardHeading').nextElementSibling
    dir==='right'?element.scrollBy(100,0):event.target.closest('.cardHeading').nextElementSibling.scrollBy(-100,0)
}
    return(
        <Hoc className="cardHeading" id={props.id}>
            
            <div className="heading">
                  <h3>{props.title}</h3>
            </div>   
                
            {props.links? <div className="filter">
            <CategoriesComponent links={props.links}/>
           </div>:null}

           {props.arrowHidden?null: <div className="arrow">
                <FontAwesomeIcon icon={faArrowLeft} onClick={(event)=>{scrollHandler('left',event)}}/>
                <FontAwesomeIcon icon={faArrowRight} onClick={(event)=>{scrollHandler('right',event)}}/>

            </div>}
        </Hoc>
    );
}
export default CardHeadingComponent;