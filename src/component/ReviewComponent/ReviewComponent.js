import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import ReviewBox from './reviewBox/reviewBox'
import Hoc from '../../Hoc/hoc'
import './ReviewComponent.css'
import { useSelector, useDispatch } from 'react-redux';
import * as Action from '../../store/reviews/action'
import styled from 'styled-components'

const Button=styled.button`
width:150px;
    padding: 10px;
    border: none;
    margin: 0px auto;
    border-radius: 10px;
    cursor: pointer;
    background-color: green;
    color:black;
    font-weight:bold ;
`
const ReviewComponent=(props)=>{
    
    const Reviews=useSelector(state=>state.review.reviews);
    const dispatch=useDispatch()
    const [name,setName]=useState()
    const [rating,setRating]=useState()
    const [title,setTitle]=useState()
    const [body,setBody]=useState()
    const [reviewId,setReviewId]=useState()

    const [reviewsArray,setReviewsArray]=useState([])


 
    useEffect(()=>{
        dispatch(Action.fetchReview(props.reviews))
       
    },[props.reviews])
    useEffect(()=>{
        setReviewsArray(Reviews);
        
    })
    const Edithandler=(data)=>{
        setName(data.name);
        setTitle(data.title);
        setBody(data.body);
        setRating(data.rating)
        setReviewId(data.id);
        window.scrollTo(0, 2000);
    }
  const submitHandler=()=>{
    if(reviewId){
        dispatch(Action.EditReview({productId:props.reviews,name,rating,title,body,reviewId:reviewId}))

    }else{
        dispatch(Action.postReview({productId:props.reviews,name,rating,title,body}))

    }

  }
    return(
        <Hoc class="reviewContainer">
            <p>Reviews</p>
            <div class="reviewArea">
                <div class="ratings">
                <h3>Cutomer Reviews</h3>
               
                </div>
               <a href="#reviewForm">Write a Review</a>
              <div class="reviewsBox">
            {reviewsArray.map(((review,i)=>{
              return <ReviewBox key={i} review={review} edit={Edithandler}/>

            }))}
              

              </div>
            </div>
            <div id="reviewForm" class="form">
                <h3><span>&nbsp;</span> Write Review</h3>
                <form class="reviewForm">
                    <label>Your Name</label>
                    <input placeholder="Enter Your Name" type="text" value={name} onChange={event=>setName(event.target.value)}></input>
                    <label>Rating</label>
                    <input type="text" value={rating} onChange={event=>setRating(event.target.value)}></input>
                    <label>Review Title</label>
                    <input placeholder="Give your review a title " type="text" value={title} onChange={event=>setTitle(event.target.value)}></input>
                    <label>Body of Review</label>
                    <textarea placeholder="Write your comments here" rows="10"type="text" value={body} onChange={event=>setBody(event.target.value)}></textarea>
                    
                </form>
                <Button type="submit" onClick={submitHandler}>Submit</Button>

            </div>
        </Hoc>
    );
}
export default ReviewComponent
