// Employee.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Employee.css';
import { validatePassword, passwordErrorMessage } from '../utils/PasswordValidatior';
import { login } from '../utils/LoginManager';
import axios from 'axios'

export const Employee = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();  
    axios.post("")
    // Handle login response
  };


  return (
    <div className="container">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" className='from-control' onChange={e=>setEmail(target.value)}/>
            <input type="password" placeholder="Password" onChange={e=>setPassword(target.value)}/>

            <a href="/changePwd">Change your password</a>
            <button>Sign In</button>
  
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/signUp">
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;




