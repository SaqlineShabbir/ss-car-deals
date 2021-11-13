import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import "./Header.css"
const Herder = () => {
  const {user,logOut,admin} = useAuth()
    return (
        <div>
            <Navbar className="navbar" expand="lg">
  <Container >
    <Navbar.Brand className="text-white fw-bold" href="#home">SS CAR <span className="my-color fw-bolder">DEALS</span></Navbar.Brand>
    <Navbar.Toggle style={{backgroundColor:"white"}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
        <Nav.Link as={Link} className="text-white fw-bold" to="/home">Home</Nav.Link>
{ !user.email &&   <Nav.Link as={Link} className="text-white fw-bold mx-3" to="/login">Log In</Nav.Link>}
        <Nav.Link as={Link} className="text-white fw-bold mx-3" to="/allCar">More Cars</Nav.Link>
       
        {
          user?.email && <Nav.Link as={Link} className="text-white fw-bold mx-3" to="/dashboard">Dash Board</Nav.Link>
        }
        
  
       
        
        { 
          user.email?
          <Link to="/register">  <button onClick={logOut} className="signup-button ">Log Out</button></Link>
          :
        <Link to="/register"> <button className="signup-button ">Sign Up</button></Link>
       }
       { user.email &&
           <div className="d-flex user">
           <img className="bg-white" src={user?.photoURL} alt="" />
           <p className="mt-1 ms-2 text-white">{user?.displayName}</p>
           </div>
       }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Herder;