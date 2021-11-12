import React from 'react';
import Rating from 'react-rating';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name,description,number,_id} = props.review;
    return (
        <div>
            <div className="single-review-container">
                <h4 className="text-center">{name}</h4>
                
                  <Rating className="rating"
                   initialRating={number}
                  emptySymbol="far fa-star my-color "
               fullSymbol="fas fa-star my-color"
                readonly/>
                <p className="ms-5 px-5">{description}</p>
            </div>
        </div>
    );
};

export default SingleReview;