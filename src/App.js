
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginAndRegister/Login/Login';
import Register from './components/LoginAndRegister/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddCars from './components/AddCars/AddCars';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MoreCars from './components/MoreCars/MoreCars';
import MyOrders from './components/MyOrders/MyOrders';
import Dashboard from './components/DashBoard/Dashboard';
function App() {
  return (
    <>
     <AuthProvider>
     <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route  path="/home">
           <Home></Home>
         </Route>
         <Route  path="/login">
           <Login></Login>
         </Route>
         <Route  path="/register">
           <Register></Register>
         </Route>
        
         <Route  path="/allCar">
           <MoreCars></MoreCars>
         </Route>
        
         <PrivateRoute  path="/dashboard">
           <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute  path="/PlaceOrder/:carId">
           <PlaceOrder></PlaceOrder>
         </PrivateRoute>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </>
  );
}

export default App;
