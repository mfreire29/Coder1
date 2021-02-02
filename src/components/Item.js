import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/cartContext'



function Item({id, title, stock, description, price, pictureUrl}) {

    const [estado, setEstado] = useState(0)
    const { addItem, removeItem, isInCart, substractItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        setEstado(cantidad)
        addItem(id, title, cantidad, price, pictureUrl)
    }

    const onSubstract = (cantidad) => {
        setEstado(cantidad)
        substractItem(id, title, cantidad, price, pictureUrl)
    }

    const eliminarProductoCarrito = () => {
        removeItem(id)
        setEstado(0)
    }    

    return (
        <>
                <div className="col-3 pb-3 text-center">
                    <NavLink to={`/item/`+ id} >
                        <img src={pictureUrl} className="img-fluid efecto  animate__animated animate__fadeIn" alt={description}/>
                    </NavLink>

                </div>
                <div className="col-6 pb-3 text-left">
                    <h5 className="card-title text-left my-0 py-0 pt-3">
                        <NavLink to={`/item/`+ id} className="product-title" >
                            {title}
                        </NavLink>        
                    </h5>
                    <p className="text-muted text-left my-0 py-0 product-description">{description}</p>
                    <h3 className="card-text text-right mt-2 price"><b>${price}.-</b></h3>

                </div>
                <div className="col-3 pb-3 text-center">
                    {
                        isInCart(id).length > 0 ?
                            <ItemCount stock={stock} initial={ isInCart(id)[0].quantity } onAdd={onAdd} onSubstract={ onSubstract } />
                        :
                            <ItemCount stock={stock} initial={0} onAdd={onAdd} onSubstract={ onSubstract } />
                    }
                </div>
        </>
    )
}

export default Item
