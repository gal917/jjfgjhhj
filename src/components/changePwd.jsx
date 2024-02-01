
import React from 'react';
import { Link } from 'react-router-dom'; 

export const changePwd = () => {  
  
  return (
    <div className="container">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form>
            <h1>Change your password</h1>
            <input type="email"  placeholder="Email" required />
            <input type="password"   placeholder=" Current Password" required/>
            <input type="password"  placeholder=" New Password" required/>
            <button>Save</button>
          </form>
        </div>

        </div>
      </div>

  );
};

export default changePwd;