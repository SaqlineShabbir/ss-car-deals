import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
      <div className="Subscribe-container">
                  <div className="Subscribe">
            <h2 className="text-center text-white mt-5 fw-bolder">Subscribe To SS Car Deals For Latest Update</h2>
            <div class="input-group mb-3 subscribe-input">
  <input type="text" class="form-control" placeholder="Put your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary text-white " type="button" id="button-addon2">Subscribe</button>
</div>
        </div>
      </div>
    );
};

export default Subscribe;