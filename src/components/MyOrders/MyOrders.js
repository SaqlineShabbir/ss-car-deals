import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import MySingleOrder from './MySingleOrder/MySingleOrder';
const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] =useState([])
      useEffect(()=>{
          fetch(`http://localhost:5000/myOrders/${user?.email}`)
          .then(res =>res.json())
          .then(data =>{
              
              setMyOrders(data)})
      },[])
  
      const handleDelete=(id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`http://localhost:5000/orders/${id}`)
          fetch(url, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data =>{
              if(data.deletedCount > 0){
                  alert('Deleted successfully');
                  const remaining = myOrders.filter(order => order._id !== id)
                  setMyOrders(remaining)
              }
          })
  
        }
      }
    return (
        <div className="my-all-tours">
        
        <h4 className="text-center mt-5"> Welcome {user?.displayName} </h4>
        <h4 className="text-center mt-1"> Your All Booking</h4>
        <div className="my-tours">

            
          {
              myOrders?.map(mySingleOrder =><MySingleOrder key={mySingleOrder._id} handleDelete={handleDelete}  mySingleOrder={mySingleOrder}></MySingleOrder>)
          }
        </div>
        </div>
    );

    
};

export default MyOrders;