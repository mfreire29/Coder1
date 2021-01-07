import React, { useState, useEffect } from 'react'
import Item from './Item'

const data = [{
	"id": 1,
	"title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950,
    "stock": 2,
    "pictureUrl": 'https://www.growlet.es/wp-content/uploads/woocommerce-placeholder.png',
},
{
	"id": 2,
	"title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700,
    "stock": 14,
    "pictureUrl": 'https://www.growlet.es/wp-content/uploads/woocommerce-placeholder.png',
},
{
	"id": 3,
	"title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650,
    "stock": 5,
    "pictureUrl": 'https://www.growlet.es/wp-content/uploads/woocommerce-placeholder.png',
}]


function ItemList() {

    const [listado, setlistado] = useState([])

    useEffect(()=>{

        const promesa = new Promise((resolver, rechazar)=>{
            setTimeout(() => {
                
                console.log('Termino el pedido')
                let codigo = 200
                
                if(codigo < 400){
                    resolver(data)
                } else {
                    rechazar('Hubo un error')
                }
        
            }, 2000);
        })

        promesa
        .then((resultado)=>{
            console.log('Salió todo bien')
            //setlistado(resultado)
            
            var array = []

            resultado.map(a => {
                return array.push(<Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />)
            })
            setlistado(array)
        })
        .catch(()=>{
            console.log('Salió todo mal')
        })
    
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    { listado }
                </div>
            </div>
        </>
    )
}

export default ItemList
