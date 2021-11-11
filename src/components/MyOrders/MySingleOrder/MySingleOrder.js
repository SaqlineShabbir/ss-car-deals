import React from 'react';
import './MySingleOrder.css'
const MySingleOrder = (props) => {
    const {tourImg, tourName, _id,number} = props.mySingleOrder
    return (
        <div className="my-tour-container">
        <div className="my-tour shadow">
            <img src={tourImg} alt="" />
            <h5>{tourName}</h5>
            <h6>${number}</h6>
            <button onClick={()=>props.handleDelete(_id)} className="cancel-btn fw-bold">Cancel <i className="fas fa-trash-alt"></i></button>
        </div>
        </div>
    );
};

export default MySingleOrder;