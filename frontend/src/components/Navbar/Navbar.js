import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="app-header">
        <NavLink
          className="app-header-item"
          activeClassName="app-header-item-active"
          exact
          to="/"
        >
          Homepage
        </NavLink>
        <NavLink
          className="app-header-item"
          activeClassName="app-header-item-active"
          exact
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className="app-header-item"
          activeClassName="app-header-item-active"
          exact
          to="/menu"
        >
          Menu
        </NavLink>
      </header>
    </div>
  );
};

export default Navbar;
