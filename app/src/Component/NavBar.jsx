import React from 'react';

const NavBar = ({ onCurrentBestSellersClick, onSearchByDateClick }) => (
  <nav>
    <ul>
      <li><button onClick={onCurrentBestSellersClick}>Current Best Sellers</button></li>
      <li><button onClick={onSearchByDateClick}>Search by Date</button></li>
    </ul>
  </nav>
);

export default NavBar;
