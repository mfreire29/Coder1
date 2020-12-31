import React, { useState } from 'react'

function ItemCount({ stock, initial}) {

    const [cantidad, setCantidad] = useState(initial)

    const [carrito, setCarrito] = useState(0)

    const aumentarCantidad = () => {
        if(stock > 0 && cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }
    
    const reducirCantidad = () => {
        if(cantidad > initial) {
            setCantidad(cantidad-1)
        }
    }

    const onAdd = () => {
        if(cantidad === 1) {
            console.log("Se ha agregado " + cantidad + " producto al carrito." )
        } else {
            console.log("Se han agregado " + cantidad + " productos al carrito." )
        }
    }



    return (
        <>

            <div className="item-count">
                <button className="btn btn-dark left" onClick = { reducirCantidad }>-</button>  
                <span>{stock > 0 ? cantidad : 0}</span>
                <button className="btn btn-dark right" onClick = { aumentarCantidad }>+</button>
            </div>
            {stock > 0 ? 
                <button className="btn btn-dark add" onClick = { onAdd }>Agregar al Carrito</button>    
                :
                <button className="btn btn-dark add">SIN STOCK</button>
            }
        </>
    )
}

export default ItemCount
