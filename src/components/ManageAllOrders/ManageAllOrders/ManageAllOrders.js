import React, { useEffect, useState } from 'react';
import ShowAllOrders from '../ShowAllOrders/ShowAllOrders';
import './ManageAllOrders.css'
const ManageAllOrders = () => {
    const [allOrders, setAllOrders] =useState([])
    useEffect(()=>{
        fetch('https://safe-sands-44519.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data => setAllOrders(data))
    },[])
    return (
        <div className="manageAllBooking-container">
        {
            allOrders?.map(singleOrder => <ShowAllOrders  key={singleOrder._id._id} singleOrder={singleOrder}></ShowAllOrders>)
        }
    </div>
    );
};

export default ManageAllOrders;