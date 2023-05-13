import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar_logo">Logo</div>
      <button className="navbar_toggle" onClick={toggleMenu}>
        <span className="navbar_icon"></span>
        <span className="navbar_icon"></span>
        <span className="navbar_icon"></span>
      </button>
      <ul className={`navbar_menu ${showMenu ? 'active' : ''}`}>
        <li className="navbar_item">
            <NavLink to="/" className="navbar_link">Home</NavLink>
        </li>
        <li className="navbar_item">
            <NavLink to="/" className="navbar_link">About</NavLink>
        </li>
        <li className="navbar_item">
            <NavLink to="/" className="navbar_link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
