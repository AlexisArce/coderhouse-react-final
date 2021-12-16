import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Final</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronics">
                Electrónica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/jewelery">
                Joyería
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/women's clothing">
                Ropa de Mujer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/men's clothing">
                Ropa de Hombre
              </Link>
            </li>
          </ul>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;