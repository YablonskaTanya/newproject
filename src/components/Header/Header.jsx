import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarNav">
          <div
            className="navbar-nav container-fluid"
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <NavLink className="nnavbar-brand mb-2 h1 text-success" to="/">
              APP
            </NavLink>

            <NavLink
              className="nav-link text-white "
              aria-current="page"
              to="/"
            >
              Counter
            </NavLink>
            <NavLink className="nav-link text-white" to="/news">
              News
            </NavLink>
            <NavLink className="nav-link text-white" to="/todo">
              Todo
            </NavLink>
            <button
              onClick={showModal}
              className="btn btn-outline-success"
              type="submit"
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
