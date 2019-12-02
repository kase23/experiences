import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="nav navbar-nav  flex-row">
      <li className="nav-item">
        <NavLink to="/">Profile</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/">Cart</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
