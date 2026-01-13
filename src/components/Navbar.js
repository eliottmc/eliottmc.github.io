import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import niche from '../assets/niche.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={niche} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/approche">Approche</Link>
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
      </ul>
    </nav>
  );
};

export default Navbar;
