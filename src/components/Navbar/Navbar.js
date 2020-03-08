import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShopMenu from "./ShopMenu";

export default function Navbar() {
  const [toggleShopMenu, setToggleShopMenu] = useState(false);

  return (
    <nav className="Navbar">
      <div className="Navbar__Brand">LOGO</div>
      <div className="Navbar__Menu">
        <NavLink className="Navbar__Menu--item" to="/" exact>
          Home
        </NavLink>
        <NavLink className="Navbar__Menu--item" to="/about">
          About
        </NavLink>

        <NavLink to="/shop" className="Navbar__Menu--item">
          Shop
        </NavLink>

        <NavLink className="Navbar__Menu--item" to="/contact">
          Contact
        </NavLink>

        <div className="Navbar__Menu__Login">
          <NavLink className="Navbar__Menu__Login--item" to="/login">
            Log In
          </NavLink>
          <span>/</span>
          <NavLink className="Navbar__Menu__Login--item" to="/sign-up">
            Sign Up
          </NavLink>
        </div>
      </div>

      {toggleShopMenu ? <ShopMenu /> : null}
    </nav>
  );
}
