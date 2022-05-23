import React from 'react';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner1} class="w-full"/> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={banner2} class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={banner3} class="w-full" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;