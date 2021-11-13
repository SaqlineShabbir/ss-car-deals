import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-content">
          <div className="footer">
            <div className="p-5">
                <h4>SS CAR <span className="my-color"> DEALS</span> </h4>
                <p>SS Car Deals is known as the Nation's Trusted Consignment Dealer; providing sellers and buyers alike with the peace of mind that only comes from partnering with one of the largest classic car dealerships in the country</p>
            </div>
            <div className="footer-text">
                <h6>Contact Us</h6>
               <div className="footer-text">
               <p>Address : Banani Dhaka</p>
                <p>Phone : 000000000000</p>
                <p>Email : youremail@gmail.com</p>
                <p>Fax : (.............)</p>
               </div>
            </div>
            <div className="footer-text">
                <h6>Information</h6>
                 <div className="footer-p">
                 <p>About Us</p>
                <p>Legal Notice</p>
                <p>Payments</p>
                <p>Services</p>
                 </div>
            </div>
            <div className="footer-text">
                <h6>My Account</h6>
                 <div className="footer-p">
                 <p>sign Up</p>
                <p>Log In</p>
                <p>Previous Service</p>
                <p>Doctor</p>
                 </div>
            </div>
            <div className="footer-text">
                <h5>ShowRoom</h5>
                <div className="footer-p">
                <p>Best service</p>
                <p>About ShowRoom</p>
                <p>Payment</p>
                <p>suppliers</p>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Footer;