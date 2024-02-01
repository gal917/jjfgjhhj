import React from "react";
import './Client.css'

export const Client = () => {
  return (
    <div>
      <div className="container">
        <div className="container" id="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input type="text" placeholder="ID" />
              <input type="tel" placeholder="Phone number" />
              <button>Sign In</button>
              <div className="overlay-container"> </div>
            </form>
            
            
    
          
			</div>
		</div>

      </div>
    </div>

  );
}

export default Client;