import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar" >
    <ul>
    <button class="glow-on-hover" > <li><Link to="/">Current Best Sellers</Link></li></button>
    <button class="glow-on-hover" > <li><Link to="/date">Search by Date</Link></li></button>
    </ul>
  </nav>
);

export default NavBar;
