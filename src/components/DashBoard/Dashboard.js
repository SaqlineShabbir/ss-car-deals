import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddCars from '../AddCars/AddCars';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import './DashBoard.css'
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
const Dashboard = () => {
    const {logOut,user,admin} =useAuth();
    let { path, url } = useRouteMatch();
    return (
        
       <div className="dashboard-container">
       <Navbar bg="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand  className="text-white">DASH'BOARD</Navbar.Brand>
    <Navbar.Toggle style={{backgroundColor:"white", color:"white"}}aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
     
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title  id="offcanvasNavbarLabel" >Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
          <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>
          {admin && <Nav.Link as={Link} to={`${url}/addCars`}>addCars</Nav.Link>}
         
          { 
         admin &&   <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
            
         }

        
         
         {
              user.email &&
              <Link to="/register">  <button onClick={logOut} className="signup-button ">Log Out</button></Link>
         }
         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
   <div>
   <Switch>
        
        <Route  path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>
        <Route  path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path={`${path}/addCars`}>
          <AddCars></AddCars>
        </Route>
        <Route  path={`${path}/review`}>
          <Review></Review>
        </Route>
      </Switch>
   </div>
       </div>
    
    );
};

export default Dashboard;