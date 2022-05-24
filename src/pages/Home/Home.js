import React from 'react';
import About from './About';
import Banner from './Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <About></About>
        </div>
    );
};

export default Home;