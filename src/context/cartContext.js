import { Toast } from 'materialize-css';
import React, { createContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

const CartProvider = (props) => {

    const [carro, setCarro] = useState([])
    const [carroFinal, setCarroFinal] = useState([])
    const [unidadesCarro, setUnidadesCarro] = useState(0)
    const [totalCarro, setTotalCarro] = useState(0)

    const notify = mensaje => toast.info(mensaje, 
        {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
        }
    );

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
            setCarroFinal([...carroFinal, { id: item, title: title, quantity: quantity, precio: price, total: (price*quantity) }])
            setUnidadesCarro(unidadesCarro + quantity)
            setTotalCarro(totalCarro + (price*quantity))
            //notify('Producto Agregado')    
        }
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
        notify('Producto Eliminado')
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
                totalCarro,
                notify,
                setUnidadesCarro,
                setTotalCarro,
                carroFinal,
                setCarroFinal
            }}
        >
            {props.children}
            <ToastContainer/>
        </CartContext.Provider>
    )
}

export default CartProvider
