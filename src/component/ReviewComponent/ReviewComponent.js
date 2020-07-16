import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import ReviewBox from './reviewBox/reviewBox'
import Hoc from '../../Hoc/hoc'
import './ReviewComponent.css'
const ReviewComponent=(props)=>{
    console.log(props.reviews)
    return(
        <Hoc class="reviewContainer">
            <p>Reviews</p>
            <div class="reviewArea">
                <div class="ratings">
                <h3>Cutomer Reviews</h3>
                <p>*********</p>
                </div>
               <a href="#reviewForm">Write a Review</a>
              <div class="reviewsBox">
              <ReviewBox/>
              <ReviewBox/>
              <ReviewBox/>

              </div>
            </div>
            <div id="reviewForm" class="form">
                <h3><span>&nbsp;</span> Write Review</h3>
                <form class="reviewForm">
                    <label>Your Name</label>
                    <input placeholder="Enter Your Name" type="text"></input>
                    <label>Rating</label>
                    <input type="text"></input>
                    <label>Review Title</label>
                    <input placeholder="Give your review a title " type="text"></input>
                    <label>Body of Review</label>
                    <textarea placeholder="Write your comments here" rows="10"type="text"></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Hoc>
    );
}
export default ReviewComponent
