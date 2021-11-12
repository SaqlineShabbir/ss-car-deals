import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Herder'
import Cars from '../../Cars/Cars';
import Review from '../../Review/Review';
import AboutUs from '../../AboutUs/AboutUs';
import Subscribe from '../Subscribe/Subscribe';
const Home = () => {
    return (
        <div>
         <Header></Header>
         <Banner></Banner>
         <Cars></Cars>
         <AboutUs></AboutUs>
         <Review></Review>
         <Subscribe></Subscribe>
        </div>
    );
};

export default Home;