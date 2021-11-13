import React, { useEffect, useState } from 'react';
import ManageSingleCar from '../ManageSingleCar/ManageSingleCar';

const ManageCars = () => {
    const [manageCars, setManageCars] = useState([])
    useEffect(()=>{
        fetch('https://safe-sands-44519.herokuapp.com/allCars')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setManageCars(data)})
    },[])

    const handleManageCarDelete = (id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`https://safe-sands-44519.herokuapp.com/cars/${id}`)
          fetch(url, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data =>{
              if(data.deletedCount > 0){
                  alert('Deleted successfully');
                  const remaining = manageCars.filter(order => order._id !== id)
                  setManageCars(remaining)
              }
          })
  
        }

    }
    return (
        <div className="cars-main">
        <div className="cars-container">
    
    {
        manageCars?.map(manageCar => <ManageSingleCar key={manageCar._id} handleManageCarDelete={handleManageCarDelete} manageCar={ manageCar}></ManageSingleCar>)
    }
  </div>
   </div>
    );
};

export default ManageCars;