import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';
const pStyle = {
  backgroundColor:"#e3f2fd"
};

const Navigation = () => (
  <nav className="navbar navbar-expand-lg  navbar-light" style={pStyle}>
  <div className="container">
   <div className="navbar-brand"> <Link to="/">Home</Link></div>
    <div className="nav-item">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
  </div>
</nav>
  
);

const NavigationAuth = () => (
  <ul className="nav navbar-nav  flex-row">

    <li>
      <Link to={ROUTES.HOME} className="nav-link">Profile</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT} className="nav-link">Account</Link>
    </li>
 
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="nav navbar-nav  flex-row">
    <li>
        <Link to={ROUTES.SIGN_UP} className="nav-link">Sign-Up</Link>
      </li>

    <li>
      <Link to={ROUTES.SIGN_IN}className="nav-link" >Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
