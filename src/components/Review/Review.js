import React, { useEffect, useState } from 'react';
import './Review.css'
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] =useState()
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setReviews(data)})
    },[])
    return (
        <div className="reviews-main">
        <div className="reviews-container">
    
        {
        reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
        }
  </div>
  
   </div>
    );
};

export default Review;