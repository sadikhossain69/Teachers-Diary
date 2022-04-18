import './Reviews.css'
import React from 'react';
import review1 from '../../../Photos/reviews/review1.jpg'
import review2 from '../../../Photos/reviews/review2.jpg'
import review3 from '../../../Photos/reviews/review3.jpg'
import review4 from '../../../Photos/reviews/review4.jpg'
import review5 from '../../../Photos/reviews/review5.jpg'
import review6 from '../../../Photos/reviews/review6.jpg'
import review7 from '../../../Photos/reviews/review7.jpg'
import review8 from '../../../Photos/reviews/review8.jpg'
import review9 from '../../../Photos/reviews/review9.jpg'

const Reviews = () => {

    const reviews = [
        {id: 1, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 2, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 3, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 4, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 5, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 6, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 7, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 8, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
        {id: 9, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teache'},
    ]

    return (
        <div>
            <h2>This is Review {reviews.length} </h2>
        </div>
    );
};

export default Reviews;