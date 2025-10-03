import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">My Website</h2>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/products" className="nav-item">Products</Link>
        </li>
        <li>
          <Link to="/contact-us" className="nav-item">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
