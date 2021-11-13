import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars, setCars] =useState()
    useEffect(()=>{
        fetch('https://safe-sands-44519.herokuapp.com/cars')
        .then(res => res.json())
        .then(data =>{ 
            
            setCars(data)})
    },[])
    return (
       <div className="cars-main">
           <h2 className="text-center fw-bolder">Our Cars</h2>
            <div className="cars-container">
        
            {
            cars?.map(car => <Car key={car._id} car={car}></Car>)
            }
      </div>
       </div>
    );
};

export default Cars;