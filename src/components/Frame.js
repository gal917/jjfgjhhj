import React from "react";
import './Frame.css';
import { Link } from "react-router-dom";

export const Frame = () => {
  return (
    <div className="square-container">
      <div className="square">
        <Link to="/Employee"><span>Employee</span></Link>
      </div>
      <div className="square">
        <Link to="/Client"><span>Client</span></Link>
       
      </div>
    </div>
  );
}

export default Frame ;