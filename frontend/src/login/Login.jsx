import React, { useEffect, useState } from 'react';
import './login.css';
import { loginFunction } from './login-operations'

const Login = (props) => {
    const [keywords, setKeywords] = useState({});
    const [password, setPassword] = useState({});

    const handleSubmit = e =>{
      e.preventDefault();
    };

    useEffect(() => {

    }, []);
    
    return (
      <div class= 'login-container'>
        <div></div>

        <div className='login-form-container'>
          <form onSubmit={handleSubmit}>
            <h3>Username or Email Address</h3>
            <input type="text" placeholder="Username..." value={keywords} onChange={e=> setKeywords(e.target.value)}/>

            <h3>Password</h3>
            <input type="password" placeholder="Password..." value={password} onChange={e=> setPassword(e.target.value)}/>
            <button>Sign In</button>
          </form>
          
          <div className='register-container'>
            <h3>Create an Account</h3>
          </div>
        </div>

      </div>
      
    );
  }
  
  export default Login;