import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import Summary from './Summary';
import Quotations from './Quotations';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Quotations></Quotations>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;