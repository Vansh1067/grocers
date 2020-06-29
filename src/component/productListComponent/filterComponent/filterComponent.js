import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faThLarge} from '@fortawesome/free-solid-svg-icons'

import './filterComponent.css'
import Hoc from '../../../Hoc/hoc'
const FilterComponent=(props)=>{
    return(
        <Hoc class="FilterBox">
            <div class="displayOpt">
            <FontAwesomeIcon className={'show'}icon={faBars}/>
            <FontAwesomeIcon icon={faThLarge}/>

            </div>
            <div class="options">

                <p >Sort By</p>
                <select>
                    <option id="option" defaultValue >Default</option>
                    <option id="option">Name</option>
                    <option id="option">L-t-H Price</option>
                    <option id="option">Rating</option>
                    <option id="option">H-t-L Price</option>
                </select>
        
            </div>
        </Hoc>
    );
}
export default FilterComponent