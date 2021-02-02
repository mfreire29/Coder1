import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [carro, setCarro] = useState([])
    const [unidadesCarro, setUnidadesCarro] = useState(0)
    const [totalCarro, setTotalCarro] = useState(0)

    const addItem = (item, title, quantity, price, pictureUrl) => {        
        if(isInCart(item).length === 1) {
            let un = carro.filter(a => a.id === item)
            const carrito = carro.filter(a => a.id !== item)
            setCarro([...carrito, { id: item, title: title, quantity: quantity, precio: price, pictureUrl: pictureUrl, total: (price*quantity) }])
            setUnidadesCarro(unidadesCarro - un[0].quantity + quantity)
            setTotalCarro(totalCarro - (un[0].precio * un[0].quantity) + (price*quantity))
            //console.log("ntreoooooooo ", carro)
        } else {
            setCarro([...carro, { id: item, title: title, quantity: quantity, precio: price, pictureUrl: pictureUrl, total: (price*quantity) }])
<<<<<<< HEAD
<<<<<<< HEAD
            setCarroFinal([...carroFinal, { id: item, title: title, quantity: quantity, precio: price, total: (price*quantity) }])
            setUnidadesCarro(unidadesCarro + quantity)
            setTotalCarro(totalCarro + (price*quantity))
            //notify('Producto Agregado')    
        }
=======
=======
>>>>>>> parent of 4327304... Item Collection II
        }
        setUnidadesCarro(unidadesCarro + quantity)
        setTotalCarro(totalCarro + (price*quantity))
>>>>>>> parent of 4327304... Item Collection II
    }

    const substractItem = (item, title, quantity, price, pictureUrl) => {        
        if(quantity === 0){
            removeItem(item)
        } else {
            if(isInCart(item).length === 1) {
                let un = carro.filter(a => a.id === item)
                const carrito = carro.filter(a => a.id !== item)
                setCarro([...carrito, { id: item, title: title, quantity: quantity, precio: price, pictureUrl: pictureUrl, total: (price*quantity) }])
                setUnidadesCarro(unidadesCarro - un[0].quantity + quantity)
                setTotalCarro(totalCarro - (un[0].precio * un[0].quantity) + (price*quantity))
                //console.log("ntreoooooooo ", carro)
            }
        }
    }

    const removeItem = (id) => {
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
                substractItem,
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
