
import React,{ useRef,useState, }  from 'react'
import http from "./Http";
import axios from 'axios'
import { FaUserTie } from "react-icons/fa";
import {RiLockPasswordFill } from "react-icons/ri";
 




const Login = ({setToken}) => {
   const [loginError, setLoginError]= useState(false);
  const loginInput = useRef(null);
   const passInput = useRef(null); 
   
   const onlogin= (e)=>{
    

    e.preventDefault();
     http.post('/login', {
      email :loginInput.current.value ,
      password : passInput.current.value
      
     }) 
  .then((res)=>{
  console.log(res.data.token);
    setToken(res.data)
     window.localStorage.setItem('token', res.data.token);
       
    })
   .catch(()=>{
      setLoginError(true);
   })
    
   
   }


    return(
    
     <div className="container">
       
        <div className="row">
            <div className="col-md-4">  </div>
            <div className="col-md-6">   
            <div className="card mt-5 p-5">
                <div className="card-header"> <h1>Login Page</h1></div>
                <div className="card-body">
                
              
               
                {/* {
                loginError ?
                   <div className="alert alert-danger" 
                role="alert">
                 Incorrect password or email !!
                 </div>
                :<> </>
                } */}
            
                
                       <form onSubmit={onlogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" 
    className="form-label"> <FaUserTie/> Email address
    </label>
    <input ref={loginInput} type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    placeholder = "Email"
   />  
    <div id="emailHelp"
     className="form-text">
      We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    
    <label
    htmlFor="exampleInputPassword1"
     className="form-label">
      <RiLockPasswordFill/> Password
      </label>
    <input 
    ref ={passInput} 
    type="password" 
    className="form-control" 
    id="exampleInputPassword1"/>
   
  </div>
  <div className="mb-3 form-check">
  
  </div>
  <button type="submit" 
  className="btn btn-success">
    Submit
    </button>
      </form>
    </div>
  </div>
 </div>
   <div className="col-md-2"> </div>
        </div>
    </div>
     
     )}

export default Login; 



     