import React from "react";
import { NavLink, Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light">
      <div className="container">
        <Link to="/">Home</Link>

        <SignedInLinks></SignedInLinks>
        <SignedOutLinks></SignedOutLinks>
      </div>
    </nav>
  );
};

export default Navbar;
