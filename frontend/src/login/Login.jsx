import React, { useState } from 'react';
import './login.css';
import { login } from './login-operations'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) =>{
      e.preventDefault();

      const user = {
        username, 
        password
      };

      const data = await login(user);

      if (data.error) {
        setError(data.error);
      } else {
        window.location.reload();
      }
    };
    
    return (
      <div class= 'login-container'>
        <div></div>

        <div className='login-form-container'>
          <form onSubmit={handleSubmit}>
            <h3>Username or Email Address</h3>
            <input 
              type="text" 
              placeholder="Username..." 
              value={username} 
              onChange={e=> setUsername(e.target.value)}
              required
            />

            <h3>Password</h3>
            <input 
              type="password" 
              placeholder="Password..." 
              value={password} 
              onChange={e=> setPassword(e.target.value)}
              required
            />
            <button>Sign In</button>

            {/* if left side is true && shows whatever is on the right side */}
            {error && <h3 className='login-error'>Something went wrong</h3>}
          </form>
          
          <div className='register-container'>
            <h3>Create an Account</h3>
          </div>
        </div>

      </div>
      
    );
  }
  
  export default Login;