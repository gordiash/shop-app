import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = e => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <React.Fragment>
      <nav className="nav">
        <button className="nav-button" onClick={toggle}>
          <i className="material-icons">menu</i>
        </button>
        <div className="nav-brand">
          <NavLink to="/" >LOGO</NavLink>
        </div>
        
        <div className="nav-login">
        <Link to="/login">
          <i className="material-icons">account_circle</i>
        </Link>
            
        </div>
      </nav>

      {toggleMenu && (
        <div className="nav-mobile">
          <NavLink to="/" className="nav-mobile__item" exact>
            Home
          </NavLink>

          <NavLink to="/about" className="nav-mobile__item">
            About
          </NavLink>

          <NavLink to="/shop" className="nav-mobile__item">
            Shop
          </NavLink>

          <NavLink to="/contact" className="nav-mobile__item">
            Contact
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
}
