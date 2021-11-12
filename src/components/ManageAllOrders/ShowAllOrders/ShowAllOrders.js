import React, { useState } from 'react';
import './ShowAllOrders.css'
import { useForm } from "react-hook-form";
const ShowAllOrders = (props) => {
    const {carImg,status,  carName,number,description,_id} = props.singleOrder;
  const [orderId, setOrderId] = useState("")

  const handleOrderId = (Id) =>{
      setOrderId(Id)
      
  }
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch(`http://localhost:5000/statusUpdate/${orderId}`, { 
            method: 'PuT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result => {
            if(result.modifiedCount){
                alert('Successfully Changed')
                
            }
        })
    };
    return (
        <div class="card mb-3" style={{"maxWidth": "540px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={carImg} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{carName}</h5>
              <p class="card-text">{description}</p>
     <form onSubmit={handleSubmit(onSubmit)}>
      
      <select onClick={()=> handleOrderId(_id)} {...register("status")}>
        <option value={status}>{status}</option>
        <option value="Approved">Approved</option>
        <option value="pending">pending</option>
        
      </select>
      <input type="submit" />
    </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowAllOrders;