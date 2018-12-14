import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-container">
      <NavLink className="nav-link" exact to='/'>
        HOME
      </NavLink>
    </div>
  );
};
