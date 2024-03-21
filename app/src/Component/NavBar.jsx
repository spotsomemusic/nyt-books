import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Current Best Sellers</Link></li>
      <li><Link to="/date">Search by Date</Link></li>
    </ul>
  </nav>
);

export default NavBar;