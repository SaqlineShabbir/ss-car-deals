import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
import Header from '../Shared/Header/Herder'
const PlaceOrder = () => {
    const {carId} = useParams()
    const [data,setData] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    const exactItem = data.filter(pd => pd._id === carId)
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
             alert('Successfully Added')
             reset()
         }
        })
        console.log(data);
        
       

};
    
    return (
        <>
        <Header></Header>
        <div>
        <div className="booking-main ">
        <h3 className="text-center">Chosen Car</h3>
<div className="booking-details ">

     <div>
    
<img className="m-4" src={exactItem[0]?.img}  alt="" />
     </div>
<div className="booking-text">
<h5> {exactItem[0]?.name}</h5> 
<p>{exactItem[0]?.description} </p> 
<h5>$ {exactItem[0]?.number} </h5> 
</div>


<div className="booking-form">
   <h5>Order This Car</h5>
<form onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={(user?.displayName)} {...register("name")} />
<input defaultValue={user?.email}  {...register("email")} />

 {
     exactItem[0]?.name && <input defaultValue={exactItem[0]?.name}  {...register("tourName")} />
 }
 {
  exactItem[0]?.img &&  <input defaultValue={exactItem[0]?.img} {...register("tourImg")} />
 }
 { 
 exactItem[0]?.description &&  <input defaultValue={exactItem[0]?.description} {...register("description")} />
 
 }
 {
     exactItem[0]?.number &&<input defaultValue={exactItem[0]?.number} {...register("number")} />
    
 }
    <input   {...register("address")} placeholder="Address"/>
    <input   {...register("phone")} placeholder="Phone Number"/>
  <input type="submit" value="Confirm Book"/>
  

</form>
</div>

</div >

</div>
    </div>
    </>
    );
};

export default PlaceOrder;