import React from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import userImg from '../../assets/user.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="left-side">
      <h2 className="website-logo-name">Bookstore CMS</h2>
      <ul>
        <li><NavLink className="links" activeClassName="activelinks" exact to="/">Books</NavLink></li>
        <li><NavLink className="links" activeClassName="activelinks" to="/Categories">Categories</NavLink></li>
      </ul>
    </div>
    <div className="right-side">
      <img src={userImg} alt="user-img" />
    </div>
  </nav>
);

export default Navbar;
