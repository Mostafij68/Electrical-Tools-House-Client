import React from 'react';
import client1 from '../../images/client1.jpg';
import client2 from '../../images/client2.jpg';
import client3 from '../../images/client3.jpg';

const Reviews = () => {
    return (
        <section className='py-20'>
            <h2 className='text-5xl text-center font-medium text-secondary mb-14'>Happy Clients</h2>
            <div className="grid items-center lg:grid-cols-3 gap-16 w-11/12 mx-auto">
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full' src={client1} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-primary font-medium">Mr. Bill</h2>
                        <h5 className='text-xl'>Company: Khampa</h5>
                        <p className='text-lg text-white'> I absolutely love doing business with Made-in-China.com. Whether you are a giant corporation or a small private business. This is the way to go. There are so many fears and anxieties and uncertainties in the world today and they can help you find exactly what you are looking for.</p>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full' src={client2} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-primary font-medium">Mrs. Shantell</h2>
                        <h5 className='text-xl'>Company: Unique Curve</h5>
                        <p className='text-lg text-white'>I came across Made-in-China.com during my research, that site was awesome! You can contact suppliers and get quotes.</p>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img className='w-full' src={client3} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-2xl text-primary font-medium">Mr. Ruben</h2>
                        <h5 className='text-xl'>Company: Metalurgica</h5>
                        <p className='text-lg text-white'>I have found in www.made-in-china.com, a friendly and reliable website, where I can find suppliers of materials and equipment for the industry.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;