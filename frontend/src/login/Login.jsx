import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className = 'login-container'>
            <div></div>

            <div></div>

            <div className='login-form-container'>
                <form>
                    <h3>Login Here</h3>
                    <input type = 'text' placeholder='Username...'/>
                    <input type = 'password' placeholder='Password...'/>
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;