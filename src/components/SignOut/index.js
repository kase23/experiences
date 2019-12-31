import React from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div className="nav-link" onClick={firebase.doSignOut}>
    Sign Out
  </div>
);

export default withFirebase(SignOutButton);
