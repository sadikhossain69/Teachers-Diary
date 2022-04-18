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
import Review from '../Review/Review';

const Reviews = () => {

    const reviews = [
        {id: 1, name: 'Tom Hank', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review1},
        {id: 2, name: 'Dua Lipa', rating: '👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review2},
        {id: 3, name: 'Tom Holland', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review3},
        {id: 4, name: 'Ariyana Grande', rating: '👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review4},
        {id: 5, name: 'Nick Jonas', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review5},
        {id: 6, name: 'Will Smith', rating: '👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review6},
        {id: 7, name: 'Tom Cruis', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review7},
        {id: 8, name: 'Jorina', rating: '👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review8},
        {id: 9, name: 'Rohima Khatun', rating: '👍👍👍👍👍', description: 'This tutor is awesome.He is a very good teacher', image: review9},
    ]

    return (
        <div className='container' >
            <div className="row">
                <h2>Client's <span style={{color: 'skyblue'}} >Satisfation</span></h2>
                {
                    reviews.map(review => <Review 
                        key={review.id} review={review}
                        />)
                }
            </div>
        </div>
    );
};

export default Reviews;