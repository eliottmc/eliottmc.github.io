import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import logo192 from '../assets/logo192.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo192} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/prestations">Prestations</Link>
        </li>
        <li>
          <Link to="/tarifs">Tarifs</Link>
        </li>
        <li>
          <Link to="/education">L{"'"}éducation positive en ville</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
