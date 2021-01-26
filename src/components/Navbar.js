import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'
import {CartContext} from '../context/cartContext'


function Navbar() {

  const { unidadesCarro, clear } = useContext(CartContext)

  const vaciarCarro = () => {
    clear()
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            CAPADOCIA
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
                <NavLink to="/category/1" className="nav-link">
                  Mujer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category/2" className="nav-link">
                  Hombre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Mi Cuenta
                </NavLink>
              </li>
            </ul>
            <CartWidget/>
            {
              unidadesCarro > 0 ?
              <div className="clear-float">
                    <button onClick={ vaciarCarro } className="btn btn-danger">Vaciar Carrito</button>
              </div>
              :
              ''
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
