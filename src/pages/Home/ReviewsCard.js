import React, { useState } from 'react';

const ReviewsCard = ({ review }) => {
    const { displayName, rating, reviewText } = review;

    return (
        <div class="card w-full z-0 h-full bg-base-100 shadow-xl image-full">
            <div class="card-body text-center">
                <h2 class="text-2xl text-primary font-medium">{displayName}</h2>
                <h5 className='text-xl'>
                    {rating === '5' && <>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '4' && <>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '3' && <>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '2' && <>
                        <i class="fa-solid fa-star text-orange-400"></i>
                        <i class="fa-solid fa-star text-orange-400"></i>
                    </>}
                    {rating === '1' && <>
                        <i class="fa-solid fa-star text-orange-400"></i>
                    </>}
                </h5>
                <p className='text-lg text-white'>{reviewText}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;