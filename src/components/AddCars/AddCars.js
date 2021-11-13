import React from 'react';
import { useForm } from "react-hook-form";
import './AddCars.css'
const AddCars = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
       fetch('https://safe-sands-44519.herokuapp.com/cars', {
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
       
    } 
    return (
        <div className="AddCars">
        <h4 className="mt-5 text-center">You Can Add A New Car Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: true })} placeholder="Car Name"/>
  <textarea {...register("description")} placeholder="description"/>
  <input {...register("img")} placeholder="Image Url"/>
  <input {...register("number")} placeholder="Price"/>
  
  <input type="submit" />
</form>
    </div>
    );
};

export default AddCars;


// "https://i.ibb.co/B2Sf20R/1997-evolution-mitsubishi-pajero.jpg"
//Mitsubishi Pajero 1997 Evolution
// "https://i.ibb.co/VSBJJ3z/2017-grace-honda.jpg"
//Honda Grace 2017
// "https://i.ibb.co/WxsvLNf/Bmw-640d.jpg"
//BMW-640
// "https://i.ibb.co/fFg30NH/Honda-vezel.jpg"
//Honda Vezel
// "https://i.ibb.co/rKhY34N/honda-crv.jpg" 
//Honda CRV
// "https://i.ibb.co/VqjrRRz/nissan-gt-r-100758126-h.jpg" 
// Nissan GTR
// "https://i.ibb.co/1zDSd6Y/nissan-x-trail.jpg" 
//Nissan x Trail
// "https://i.ibb.co/MgT12Jn/photo-1552519507-da3b142c6e3d.jpg" 
// Chevrolet

// "https://i.ibb.co/2KC0X80/sedan-nyias-2016-toyota-corolla-se-50th.jpg"
//Toyota Corolla
// "https://i.ibb.co/bBqXvKD/toyota-land-cruiser-prado.jpg"
// Toyota Land Cruise Prado
//The Toyota Land Cruiser Prado (Japanese: トヨタ・ランドクルーザー プラド, Toyota Rando-Kurūzā Purado) is a full-size four-wheel drive vehicle in the Land Cruiser range produced by the Japanese automaker Toyota. The Prado is one of the smaller vehicles in the Land Cruiser range. From 2009, the Prado is based on Toyota's J150 platform. In some countries it is available as the equivalent Lexus GX.