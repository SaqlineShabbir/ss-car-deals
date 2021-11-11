import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = (props) => {
    const {img,name,description,number,_id} = props.singleCar
    return (
        <div className="car-container">
        <img src={img} alt="" />
        <div className="car-text">
        <h3 className="">{name}</h3>
        <h5 className="price">$ {number}</h5>
        <p>{description}</p>
        <Link to={`/PlaceOrder/${_id}`}><button className="purchase-btn">Purchase</button></Link>
        </div>
    </div>
    );
};

export default SingleCar;