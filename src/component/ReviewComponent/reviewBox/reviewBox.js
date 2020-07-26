import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc';
import './reviewBox.css'

const ReviewBox=(props)=>{
    
   
    return(
        <Hoc class="reviewCont">
            <a onClick={()=>props.edit({name:props.review.Name,title:props.review.title,body:props.review.body,rating:props.review.rating,id:props.review._id})}>Edit</a>

            <p>{props.review.rating}</p>
            <h4>{props.review.title}</h4>
            <p id="author">{props.review.Name} on {props.review.Date}</p>
            <p>{props.review.body}</p>
        </Hoc>
    );
}
export default ReviewBox
