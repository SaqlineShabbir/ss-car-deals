import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css'
const Car = (props) => {
    const {img,name,description,number,_id} = props.car
    return (
        <div className="car-container">
            <img src={img} alt="" />
            <div className="car-text">
            <h4 className="fw-bolder">{name}</h4>
            <h5 className="price">$ {number}</h5>
            <p className="">{description}</p>
            <Link to={`/PlaceOrder/${_id}`}><button className="purchase-btn">Purchase</button></Link>
            </div>
        </div>
    );
};

export default Car;