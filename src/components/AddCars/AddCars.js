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
//2017 Honda Grace Hybrid EX (d-cl. 7) . Specs datasheet with technical data and performance data plus an analysis of the direct market competition of Honda Grace Hybrid EX (d-cl. 7) in 2017, the model with 4-door sedan body and Line-4 1497 cm3 / 91.1 cui, 101 kW / 137 PS / 135 hp (JIS net) of power, 170 Nm / 125 lb-ft 
//15,346





// "https://i.ibb.co/WxsvLNf/Bmw-640d.jpg"
//BMW-640
//The BMW 6 Series is a range of grand tourers produced by BMW since 1976. It is the successor to the E9 Coupé and is currently in its fourth generation. The first generation BMW E24 6 Series was available solely as a two-door coupé and produced from 1976 to 1989, when it was supplanted by the larger BMW 8 Series (E31).
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
//The Toyota Corolla (Japanese: トヨタ・カローラ, Hepburn: Toyota Karōra) is a series of subcompact and compact cars manufactured and marketed globally by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world
//33,900


//https://upload.wikimedia.org/wikipedia/commons/5/57/Rolls-Royce_Wraith_01_China_2016-04-14.jpg

// "https://i.ibb.co/bBqXvKD/toyota-land-cruiser-prado.jpg"
// Toyota Land Cruise Prado
//The Toyota Land Cruiser Prado (Japanese: トヨタ・ランドクルーザー プラド, Toyota Rando-Kurūzā Purado) is a full-size four-wheel drive vehicle in the Land Cruiser range produced by the Japanese automaker Toyota. The Prado is one of the smaller vehicles in the Land Cruiser range. From 2009, the Prado is based on Toyota's J150 platform. In some countries it is available as the equivalent Lexus GX


//https://www.joystoyz.com/wp-content/uploads/2020/11/rrg.jpg
//Rolls-Royce Wraith 01 China 2016
//Rolls-Royce Motor Cars Limited is a British luxury automobile maker. Rolls-Royce Motor Cars Limited operates from purpose-built administrative and production facilities opened in 2003 across from the historic Goodwood Circuit in Goodwood, West Sussex, England, United Kingdom. Rolls-Royce Motor Cars Limited is the exclusive manufacturer of Rolls-Royce branded motor cars since 2003.

