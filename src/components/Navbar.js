import React, { useContext } from "react";
import CartWidget from "./CartWidget";
<<<<<<< HEAD
import Info from "./Info";
=======
import { NavLink } from 'react-router-dom'
import {CartContext} from '../context/cartContext'

<<<<<<< HEAD
>>>>>>> parent of 4327304... Item Collection II
=======
>>>>>>> parent of 4327304... Item Collection II

function Navbar() {

  const { unidadesCarro, clear } = useContext(CartContext)

  const vaciarCarro = () => {
    clear()
  }

  return (
    <>
<<<<<<< HEAD
      <center>
        <img src="https://www.bief.com.ar/tlv/logoW.jpeg" alt="logo" className="img-fluid" width="50%" />
      </center>
      <img src="https://pedidodirecto.net/assets/w03.jpg" alt="logo" className="img-fluid sombra" />
      <Info/>
=======
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
          </div>
        </div>
      </nav>
>>>>>>> parent of 4327304... Item Collection II
      <CartWidget/>
    </>
  );
}

export default Navbar;
