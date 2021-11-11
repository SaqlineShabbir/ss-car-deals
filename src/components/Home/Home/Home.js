import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Herder'
import Cars from '../../Cars/Cars';
const Home = () => {
    return (
        <div>
         <Header></Header>
         <Banner></Banner>
         <Cars></Cars>
        </div>
    );
};

export default Home;