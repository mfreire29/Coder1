import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ItemCount from './ItemCount'

function ItemDetail({ id, title, stock, description, price, pictureUrl }) {

    const [estado, setEstado] = useState(0)
    const [notif, setNotif] = useState(false)

    const onAdd = cantidad => {
        setNotif(true)
        setEstado(cantidad)
        if(cantidad === 1) {
            console.log("Se ha agregado " + cantidad + " producto al carrito." )
        } else {
            console.log("Se han agregado " + cantidad + " productos al carrito." )
        }
    }

    const eliminarProductoCarrito = () => {
        setEstado(0)
    }

    return (
        <>  
            <div className="col-xs-12 col-sm-6">
                <img src={pictureUrl} className="img-fluid" alt={ description }/>
            </div>
            <div className="col-xs-12 col-sm-6">
                <h1>{ title }</h1>
                <h5>{ description }</h5>
                <h1 className="mt-5 text-center"><span className="text-danger"><b>${ price }.-</b></span><br/>pesos argentinos</h1>
                <div className="mt-5 text-center">
                    <p className="text-muted text-center">Stock Disponible: { stock }</p>
                    {
                        notif ?
                            estado > 0 ?
                                estado === 1  ?
                                    <p className="mt-3 text-center p-0">Se ha agregado { estado } al carrito.</p>
                                :
                                    <p className="mt-3 text-center p-0">Se han agregado { estado } al carrito.</p>
                            :
                                ''
                        :
                            ''
                    }
                    {
                        estado !== 0 ?
                            <>
                                <NavLink to="/cart" className="nav-link text-center m-0" >
                                    <button className="btn btn-dark add" >Terminar Compra</button>
                                </NavLink>
                                <button className="btn btn-dark add mt-0" onClick={eliminarProductoCarrito}>Eliminar del Carro</button>
                            </>
                        :
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    } 
                    
                </div>
            </div>
        </>
    )
}

export default ItemDetail
