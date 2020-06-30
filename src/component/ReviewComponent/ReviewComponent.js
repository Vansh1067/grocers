import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../Hoc/hoc'
import './ReviewComponent.css'
const ReviewComponent=(props)=>{
    return(
        <Hoc class="reviewContainer">
            <p>Reviews</p>
            <div class="form">
                <h3><span>&nbsp;</span> Write Review</h3>
                <form class="reviewForm">
                    <label>Your Name</label>
                    <input placeholder="Enter Your Name" type="text"></input>
                    <label>Your Name</label>
                    <textarea placeholder="Enter Your Review" rows="10"type="text"></textarea>
                    <label>Rating</label>
                    <input type="text"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Hoc>
    );
}
export default ReviewComponent
