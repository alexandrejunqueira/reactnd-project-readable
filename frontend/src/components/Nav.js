import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
