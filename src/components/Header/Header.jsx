import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ showModal }) => {
  const navigate = useNavigate();

  const handleLoginPage = () => {
    navigate("/login");
  };

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
            <button
              onClick={handleLoginPage}
              className="btn btn-outline-success"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
