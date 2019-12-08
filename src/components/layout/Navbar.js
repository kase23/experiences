import React from "react";
import { NavLink, Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";


const pStyle = {
  backgroundColor:"#e3f2fd"
};



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light" style={pStyle}>
      <div className="container">
       <div className="navbar-brand"> <Link to="/">Home</Link></div>
        <div className="nav-item">
        <SignedInLinks></SignedInLinks>
        <SignedOutLinks></SignedOutLinks>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
