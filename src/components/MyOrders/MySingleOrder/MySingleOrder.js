import React from 'react';

import './MySingleOrder.css'
const MySingleOrder = (props) => {
    
    const {carImg,  carName, _id,number, status} = props.mySingleOrder

    return (
        <div className="my-order-container">
       
            <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Item</th>
      <th scope="col">Status</th>
      <th className="ms-5" scope="col">Cancel This Order</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="my-tour"> <div className="d-flex"><img src={carImg} alt="" /> <p className="ms-5 mt-5" >{carName} <br/>$ {number}</p> </div> </td>
      <td ><p className="status">{status}</p></td>
      <td><button onClick={()=>props.handleDelete(_id)} className="cancel-btn fw-bold">Cancel </button></td>
    </tr>
   
    
  </tbody>
</table>
        </div>
    );
};

export default MySingleOrder;