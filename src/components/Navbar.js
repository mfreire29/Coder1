import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import Info from "./Info";

function Navbar() {

  return (
    <>
      <center>
        <img src="https://www.bief.com.ar/tlv/logoW.jpeg" alt="logo" className="img-fluid" width="50%" />
      </center>
      <img src="https://pedidodirecto.net/assets/w03.jpg" alt="logo" className="img-fluid sombra" />
      <Info/>
      <CartWidget/>
    </>
  );
}

export default Navbar;
