import React, { useContext } from "react";
import {CartContext} from '../context/cartContext'
import { NavLink } from 'react-router-dom'

function CartWidget() {

  const { unidadesCarro, totalCarro } = useContext(CartContext)

  return (
    <>
        <div className={`${unidadesCarro > 0 ? "mostrar" : "ocultar"}`}>
          <div className="cart-float">
            <NavLink to="/cart" className="nav-link">
            <p className="text-left">
              <b>Pedido:</b> { unidadesCarro } { unidadesCarro > 1 ? 'productos' : 'producto'} = ${ totalCarro }
            </p>
            </NavLink>
          </div>
          <span className="badge badge-primary">{ unidadesCarro }</span>
        </div>            
    </>
  );
}

export default CartWidget;
