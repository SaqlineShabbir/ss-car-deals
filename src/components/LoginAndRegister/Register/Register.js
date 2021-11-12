import React, { useState} from 'react';
import { Spinner } from 'react-bootstrap';
import { Link,useHistory  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Herder'
import img from '../../../image/login.png'
const Register = () => {
    const {registerUser,isLoading,authError} =useAuth()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})
    const handleOnBlur = (e) => {
     const field = e.target.name;
     const value = e.target.value;
     const newLoginData = {...loginData}
     newLoginData[field] = value;
     console.log(newLoginData);
     setLoginData(newLoginData)

    }
    const handleLogInSubmit= (e) => {
      alert('user Created Successfully');
      if(loginData.password !== loginData.password2){
          alert('your password didnt match')
          return
      }
      registerUser(loginData.email, loginData.password,loginData.name, history)
      e.preventDefault()
    }

    return (
         <>
          <Header></Header>
        { !isLoading && <div className="register">
             
        <div>
            <img src={img} alt="" />
            </div>
            <div className="login">
        <div className="  p-4 my-5 py-5 ">
        <h3 className="mb-4 fw-bold">Creat Account</h3>
            <form onSubmit={ handleLogInSubmit}>

    <label htmlFor="inputName" className="form-label">Your Name</label>
    <input type="text" name="name"onBlur={handleOnBlur}className="form-control" required aria-describedby=""/><br/>
 <label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" name="email" onBlur={handleOnBlur}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/><br/>

<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" name="password" onBlur={handleOnBlur}  class="form-control" id="exampleInputPassword1"/>
<label for="exampleInputPassword1" class="form-label">Re-Type Password</label>
<input type="password" name="password2" onBlur={handleOnBlur}  class="form-control" id="exampleInputPassword1"/>
<br/>

<p className="text-danger">{authError}</p>
                <input className="register-button mt-2 w-100" type="submit" value="Creat Account" />
            </form>
            <p className="my-3">Already Registered? <Link to="/login">Log In</Link></p>
         {/* <button onClick={handleGoogleLogIn} className="register-button w-100 "><i class="fab fa-google"></i> Sign In with Google</button> */}
        </div>
    </div>
        
    </div>}
    {isLoading && <div className="spinner"><Spinner  animation="border" /></div>  }
           </>  
        
    );
};

export default Register;