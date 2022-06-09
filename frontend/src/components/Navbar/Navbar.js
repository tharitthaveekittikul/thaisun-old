import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { logout, useAuth } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

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
        {currentUser ? (
          <NavLink
            className="app-header-item"
            activeClassName="app-header-item-active"
            exact
            to="/"
            onClick={handleLogout}
          >
            {currentUser.email}
          </NavLink>
        ) : (
          <NavLink
            className="app-header-item"
            activeClassName="app-header-item-active"
            exact
            to="/login"
          >
            Login
          </NavLink>
        )}

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
