import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <Link to="/">SHIPLOGISTIC</Link>
      </div>
      
      <nav className="nav-menu">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/domestic" className="nav-item">Domestic</Link>
        <Link to="/international" className="nav-item">International</Link>
        <Link to="/contact" className="nav-item btn-contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;