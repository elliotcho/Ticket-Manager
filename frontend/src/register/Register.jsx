import React, { useState } from 'react';
import { register } from './register-operations';
import isAuthenticated from '../utils/isAuthenticated';
import './register.css';

const Register = () => {
    const defaultFields = {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      adminCode: '',
      password: '',
    }

    const [formFields, setFormFields] = useState(defaultFields);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const data = await register({ ...formFields });

      if (data.error){
          setSuccess(false);
          setError(true);
      } else {
          if (isAuthenticated()) {
             window.location.reload();
          }

          setFormFields(defaultFields);
          setSuccess(true);
          setError(false);
      };
    };
 
    const handleChange = (e) => {
        const fieldName = e.target.name; 
          const fieldValue = e.target.value; 

        const newFields = {
          ...formFields,
          [fieldName]: fieldValue
        };

        setFormFields(newFields);
    }
   
    return (
      <div class= 'signup-container'>
        <div></div>

        <div className='signup-form-container'>
          <h3 className='signup-form-container-register-title'>REGISTER</h3>
          <form onSubmit={handleSubmit}>
            <h3>Email Address</h3>
            <input 
              type="text" 
              placeholder="Email Address..." 
              value={formFields.email} 
              name = 'email'
              onChange={handleChange}
              required
            />

            <h3>Username</h3>
            <input 
              type="text" 
              placeholder="Username..." 
              value={formFields.username} 
              name = 'username'
              onChange={handleChange}
              required
            />

            <h3>First Name</h3>
            <input 
              type="text" 
              placeholder="First Name..." 
              value={formFields.firstName} 
              name = 'firstName'
              onChange={handleChange}
              required
            />

            <h3>Last Name</h3>
            <input 
              type="text" 
              placeholder="Last Name..." 
              value={formFields.lastName} 
              name = 'lastName'
              onChange={handleChange}
              required
            />

            <h3>Password</h3>
            <input 
              type="password" 
              placeholder="Password..." 
              value={formFields.password}
              name = 'password' 
              onChange={handleChange}
              required
            />

            <h3>Admin Code</h3>
            <input 
              type="password" 
              placeholder="Admin Code - optional" 
              value={formFields.adminCode}
              name = 'adminCode' 
              onChange={handleChange}
            />

            <button>Register</button>

            {error && <h3 className='signup-error'>Something went wrong</h3>}
            {success && <h3 className='signup-success'>Register success. Please wait for admin to enable account.</h3>}
          </form>
        </div>

        <div></div>
      </div>
      
    );
  }
  
  export default Register;