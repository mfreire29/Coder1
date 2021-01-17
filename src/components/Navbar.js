import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            Tienda Online
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/Mujer" className="nav-link">
                  Mujer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/Hombre" className="nav-link">
                  Hombre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Mi Cuenta
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
                <NavLink to="/cart" className="nav-link">
                    <CartWidget/>
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
