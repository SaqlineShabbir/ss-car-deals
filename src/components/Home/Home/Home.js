import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Herder'
import Cars from '../../Cars/Cars';
import Review from '../../Review/Review';
const Home = () => {
    return (
        <div>
         <Header></Header>
         <Banner></Banner>
         <Cars></Cars>
         <Review></Review>
        </div>
    );
};

export default Home;