import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/best-sellers">Current Best Sellers</Link>
                </li>
                <li>
                    <Link to="/search-by-date">Search by Date</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;