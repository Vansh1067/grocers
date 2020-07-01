import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Hoc from '../../../Hoc/hoc';
import img from '../../../assest/Draft-1593116874166.png'
import './asideComponent.css'
const AsideComponent=(props)=>{
    return(
        <Hoc class="aside">
            <div class="asideHeader">
                    <img src={img}></img>
                    <h3> Hi, Vansh</h3>
                </div>
        </Hoc>
    );
}
export default AsideComponent
