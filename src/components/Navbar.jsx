import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import niche from "../assets/niche.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={niche} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Burger button (mobile) */}
      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation links */}
      <ul className={`navbar-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link to="/approche" onClick={closeMenu}>À propos</Link></li>
        <li><Link to="/prestations" onClick={closeMenu}>Prestations</Link></li>
        <li><Link to="/bilan" onClick={closeMenu}>Bilan éducatif et comportemental</Link></li>
        <li><Link to="/tarifs" onClick={closeMenu}>Tarifs</Link></li>
        <li><Link to="/education" onClick={closeMenu}>L{"'"}éducation positive en ville</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
