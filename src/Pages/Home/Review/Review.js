import './Review.css'
import React from 'react';
import { Fade } from 'react-reveal';

const Review = ({review}) => {
    const { name, rating, description, image } = review
    return (
        <Fade>
            <div className='col-lg-4 col-md-6 col-sm-12 mt-4' >
            <img className='w-50' style={{borderRadius: '10px',}} src={image} alt="" />
            <h4>{name}</h4>
            <span>{rating}</span>
            <p> {description} </p>
        </div>
        </Fade>
    );
};

export default Review;