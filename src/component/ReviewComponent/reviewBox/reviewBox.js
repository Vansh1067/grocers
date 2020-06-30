import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc';
import './reviewBox.css'
const ReviewBox=(props)=>{
    return(
        <Hoc class="reviewCont">
            <a href="">Edit</a>

            <p>Rating</p>
            <h4>Lorem hisu ksh ksnkm kls</h4>
            <p id="author">vansh on june 6,2020</p>
            <p>descrito n snck snam, kjclkjl jcl ljckljl c sjhj lsjschl jlk llkjc jkljcl klkjkl clkjlkj ljslk cjlkj ljscl</p>
        </Hoc>
    );
}
export default ReviewBox
