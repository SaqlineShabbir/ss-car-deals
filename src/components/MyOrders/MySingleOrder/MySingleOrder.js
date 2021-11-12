import React from 'react';
import './MySingleOrder.css'
const MySingleOrder = (props) => {
    const {carImg,  carName, _id,number, status} = props.mySingleOrder
    return (
        <div className="my-tour-container">
        <div className="my-tour shadow">
            <img src={carImg} alt="" />
            <h5>{carName}</h5>
            <h6>${number}</h6>
            <p>{status}</p>
            <button onClick={()=>props.handleDelete(_id)} className="cancel-btn fw-bold">Cancel <i className="fas fa-trash-alt"></i></button>
        </div>
        </div>
    );
};

export default MySingleOrder;