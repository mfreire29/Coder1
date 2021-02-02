import React, { useState } from 'react'

function ItemCount({ stock, initial, onAdd, onSubstract}) {

    const [cantidad, setCantidad] = useState(initial)

    const aumentarCantidad = () => {
        setCantidad(cantidad+1)
        cantidadAdd(cantidad+1)
    }
    
    const reducirCantidad = () => {
        if(cantidad > 0) {
            setCantidad(cantidad-1)
            cantidadSubstract(cantidad-1)
        }
    }

    const cantidadAdd = cant => {
        setCantidad(cant)
        onAdd(cant)
    }

    const cantidadSubstract = cant => {
        setCantidad(cant)
        onSubstract(cant)
    }

    return (
        <>

            <div className="item-count mx-auto mt-4">
                <button className="btn btn-dark left" onClick = { reducirCantidad }>-</button>  
                <span>{ cantidad > 0 ? cantidad : 0 }</span>
                <button className="btn btn-dark right" onClick = { aumentarCantidad }>+</button>
                
                {/*
                    stock > 0 ? 
                        <button className="btn btn-dark add" onClick = { cantidadAdd }>Agregar al Carrito</button>    
                    :
                        <button className="btn text-danger add">SIN STOCK</button>
                */}
            </div>
        </>
    )
}

export default ItemCount
