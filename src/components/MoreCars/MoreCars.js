import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar/SingleCar';
import Header from '../Shared/Header/Herder'
const MoreCars = () => {
    const [allCar, setAllCar] = useState([])
    useEffect(()=>{
        fetch('https://safe-sands-44519.herokuapp.com/allCars')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setAllCar(data)})
    },[])
    return (
        <>
        <Header></Header>
        <div className="cars-main">
            <div className="cars-container">
        
        {
            allCar?.map(singleCar => <SingleCar singleCar={singleCar}></SingleCar>)
        }
      </div>
       </div>
       </>
    );
};

export default MoreCars;