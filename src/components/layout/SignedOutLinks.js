import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="nav navbar-nav  flex-row">
      <li>
        <NavLink to="/"  className="nav-link">Sign-Up</NavLink>
      </li>
      <li>
        <NavLink to="/"  className="nav-link">Log-In</NavLink>
      </li>
      <li>
        <NavLink to="/"  className="nav-link">Cart</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
