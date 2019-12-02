import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="nav navbar-nav  flex-row">
      <li>
        <NavLink to="/">Sign-Up</NavLink>
      </li>
      <li>
        <NavLink to="/">Log-In</NavLink>
      </li>
      <li>
        <NavLink to="/">Cart</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
