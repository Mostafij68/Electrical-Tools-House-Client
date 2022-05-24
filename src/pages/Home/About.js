import React from 'react';
import bg1 from '../../images/bg-1.jpg'

const About = () => {
    return (
        <section className='py-10' style={{ backgroundImage: `url(${bg1})` }}>
            <div className='text-center'>
                <h1 className='text-5xl text-white text-center mt-10'>Millions Buyer Trust us</h1>
                <p className='text-primary text-2xl my-5'>Succes Business</p>
            </div>
        </section>
    );
};

export default About;