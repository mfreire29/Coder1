import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [carro, setCarro] = useState([])
    const [unidadesCarro, setUnidadesCarro] = useState(0)

    useEffect(() => {
        console.log(carro)
    }, [carro])



    const addItem = (item, quantity) => {        
        if(isInCart(item).length === 0) {
            setCarro([...carro, { id: item, quantity: quantity }])
        }
        setUnidadesCarro(unidadesCarro + quantity)
    }

    const removeItem = (id, quantity) => {
        let un = carro.filter(a => a.id === parseInt(id))
        setUnidadesCarro(unidadesCarro - un[0].quantity)
        const carrito = carro.filter(a => a.id !== parseInt(id))
        setCarro(carrito)
    }

    const clear = () => {
        setCarro([])
        setUnidadesCarro(0)
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
                unidadesCarro
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
