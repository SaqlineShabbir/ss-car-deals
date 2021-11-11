import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../../Shared/Header/Herder'
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {loginUser,user,isLoading, authError} = useAuth()
   const [loginData, setLoginData] = useState({})
   const location = useLocation();
   const history = useHistory()
    const handleOnBlur = (e) => {
     const field = e.target.name;
     const value = e.target.value;
     const newLoginData = {...loginData}
     newLoginData[field] = value;
     setLoginData(newLoginData)

    }
    const handleLogInSubmit= (e) => {
      loginUser(loginData.email, loginData.password, location, history)
      e.preventDefault()
    }


    return (
        <>
        <Header></Header>
       { !isLoading && <div className="register">
        <div>
            {/* <img src={img} alt="" /> */}
            </div>
            <div className="login">
        <div className="  p-4 my-5 py-5 ">
        <h3 className="mb-4 fw-bold">Log In</h3>
            <form onSubmit={ handleLogInSubmit}>
   
 <label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" name="email" onBlur={handleOnBlur}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" name="password" onBlur={handleOnBlur}  class="form-control" id="exampleInputPassword1"/>
<br/>
<p className="text-danger">{authError}</p>

                <input className="register-button mt-2 w-100" type="submit" value="Log In" />
            </form>
            <p className="my-3">New To SS CAR DEALS? <Link to="/register">Sign Up</Link></p>
         {/* <button onClick={handleGoogleLogIn} className="register-button w-100 "><i class="fab fa-google"></i> Sign In with Google</button> */}
        </div>
    </div>
        
    </div>}
    {isLoading && <div className="spinner"><Spinner  animation="border" /></div>  }
    </>
    );
};

export default Login;