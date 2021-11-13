import React, { useState } from 'react';
import './ShowAllOrders.css'
import { useForm } from "react-hook-form";
const ShowAllOrders = (props) => {
    const {carImg,status,  carName,description,_id,name, phone} = props.singleOrder;
  const [orderId, setOrderId] = useState("")

  const handleOrderId = (Id) =>{
      setOrderId(Id)
      
  }
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch(`https://safe-sands-44519.herokuapp.com/statusUpdate/${orderId}`, { 
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
              <h4 class="card-title">{carName}</h4>
             
              <h5 className="fst-italic">Ordered by  {name}</h5>
              <p>Clients Phone Number: {phone}</p>
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