import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'
import MySingleOrder from './MySingleOrder/MySingleOrder';
const MyOrders = () => {
    const {user, isLoading} = useAuth();
    const [myOrders, setMyOrders] =useState([])
      useEffect(()=>{
          fetch(`https://safe-sands-44519.herokuapp.com/myOrders/${user?.email}`)
          .then(res =>res.json())
          .then(data =>{
              
              setMyOrders(data)})
      },[])
  
      const handleDelete=(id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`https://safe-sands-44519.herokuapp.com/orders/${id}`)
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

      if(isLoading) {
        return <div class="spinner-border" role="status">
   <span class="visually-hidden">Loading...</span>
 </div>
     }
    return (
        <div className="my-all-tours ">
        
        <h4 className="text-center mt-5 fw-bolder"> Welcome  <span className="fst-italic text-primary">{user?.displayName} </span></h4>
        <h4 className="text-center mt-1 fw-bolder"> Your All  Orders</h4>
        <div className="my-tours">

            
          {
              myOrders?.map(mySingleOrder =><MySingleOrder key={mySingleOrder._id} handleDelete={handleDelete}  mySingleOrder={mySingleOrder}></MySingleOrder>)
          }
        </div>
        </div>
    );

    
};

export default MyOrders;