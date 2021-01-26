import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [carro, setCarro] = useState([])
    const [unidadesCarro, setUnidadesCarro] = useState(0)
    const [totalCarro, setTotalCarro] = useState(0)

    const addItem = (item, title, quantity, price, pictureUrl) => {        
        if(isInCart(item).length === 0) {
            setCarro([...carro, { id: item, title: title, quantity: quantity, precio: price, pictureUrl: pictureUrl, total: (price*quantity) }])
        }
        setUnidadesCarro(unidadesCarro + quantity)
        setTotalCarro(totalCarro + (price*quantity))
    }

    const removeItem = (id, quantity) => {
        let un = carro.filter(a => a.id === id)
        setUnidadesCarro(unidadesCarro - un[0].quantity)
        setTotalCarro(totalCarro - (un[0].precio * un[0].quantity))
        const carrito = carro.filter(a => a.id !== id)
        setCarro(carrito)
    }

    const clear = () => {
        setCarro([])
        setUnidadesCarro(0)
        setTotalCarro(0)
    }

    const isInCart = (id) => {
        let existe = carro.filter(a => a.id === id)
        return existe
    }

     

    return (
        <CartContext.Provider
            value= {{
                carro,
                setCarro,
                addItem,
                removeItem,
                isInCart,
                clear,
                unidadesCarro,
                totalCarro
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
