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
import ManageCars from '../ManageCars/ManageCars/ManageCars';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import AddReview from '../Review/AddReview/AddReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders/ManageAllOrders';
import DashBoardHome from './DashBoardHome/DashBoardHome';

const Dashboard = () => {
    const {logOut,user,admin} =useAuth();
    let { path, url } = useRouteMatch();
    return (
        
       <div className="dashboard-container">
       <Navbar bg="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand  className="text-white">DASH'BOARD</Navbar.Brand>
    <Link to="/home">  <button className="dashboard-button ">Go Home</button></Link>
    <Navbar.Toggle style={{backgroundColor:"white", color:"white"}}aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
     
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title  id="offcanvasNavbarLabel" >
        <div className="dashboard-user">
        <img src={user.photoURL} alt="" />
          <h4 className="fw-bold">{user.displayName}</h4>
          
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 ">
          {/* <Nav.Link as={Link} to={`${url}/`} className="dashboard-links"><i className="fas fa-sort-alpha-up"> DashBoardHome</i></Nav.Link> */}
         {!admin && <Nav.Link as={Link} to={`${url}/myOrders`} className="dashboard-links"><i className="fas fa-sort-alpha-up"></i> My Orders</Nav.Link>}
          {!admin && <Nav.Link as={Link} to={`${url}/addReview`} className="dashboard-links"><i className="fas fa-plus-square"></i> Add Review</Nav.Link>}
         {!admin && <Nav.Link as={Link} to={`${url}/payment`} className="dashboard-links"><i className="fas fa-money-check-alt"></i> Pay</Nav.Link>}

          {admin && <Nav.Link as={Link} to={`${url}/addCars`} className="dashboard-links"><i className="fas fa-plus-square"></i> addCars </Nav.Link>}
         
        { 
         admin &&   <Nav.Link as={Link} to={`${url}/makeAdmin`} className="dashboard-links"><i className="fas fa-user-lock"></i> Make Admin </Nav.Link>
            
         }
        { 
         admin &&   <Nav.Link as={Link} to={`${url}/manageAllOrders`} className="dashboard-links"><i className="fas fa-user-lock"></i> Manage All Orders </Nav.Link>
            
         }
        { 
         admin &&   <Nav.Link as={Link} to={`${url}/manageCars`} className="dashboard-links"><i className="fas fa-tools"></i> Manage Cars</Nav.Link>
            
         }

        
         
         {
              user.email &&
              <Link to="/register">  <button onClick={logOut} className="dashboard-button ">Log Out</button></Link>
         }
        
         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
   <div>
   <Switch>
        <Route exact path={`${path}/`}>
        <DashBoardHome></DashBoardHome>
        </Route>
        <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
        </Route>
        <AdminRoute  path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute  path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute  path={`${path}/addCars`}>
          <AddCars></AddCars>
        </AdminRoute>
        <Route  path={`${path}/addReview`}>
          <AddReview></AddReview>
        </Route>
        <Route  path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <AdminRoute  path={`${path}/manageCars`}>
          <ManageCars></ManageCars>
        </AdminRoute>
      </Switch>
   </div>
       </div>
    
    );
};

export default Dashboard;