import React from 'react';
import './styles/navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="left-side">
      <h2 className="website-logo-name">Bookstore CMS</h2>
      <ul>
        <li>Books</li>
        <li>Categories</li>
      </ul>
    </div>
    <div className="right-side">
      <span className="user">user</span>
    </div>
  </nav>
);

export default Navbar;
