import React from "react";

const Header = ({ showModal }) => {
  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <span className="nnavbar-brand mb-2 h1 text-success">Navbar</span>

        <button
          onClick={showModal}
          className="btn btn-outline-success"
          type="submit"
        >
          Open Modal
        </button>
      </div>
    </nav>
  );
};

export default Header;
