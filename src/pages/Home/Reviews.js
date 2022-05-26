import React, { useEffect, useState } from 'react';
import client1 from '../../images/client1.jpg';
import client2 from '../../images/client2.jpg';
import client3 from '../../images/client3.jpg';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);
    return (
        <section className='py-20'>
            <h2 className='text-5xl text-center font-medium text-secondary mb-14'>Happy Clients</h2>
            <div className="grid items-center lg:grid-cols-3 md:grid-cols-2 gap-16 w-11/12 mx-auto">
                {
                    reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;