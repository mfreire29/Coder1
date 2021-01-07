import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ greeting }) {

    const data = [
        {
        "id": 1,
        "title": "Remera Hombre",
        "description": "Remera lisa de ALgodón",
        "price": 950,
        "stock": 2,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
    }]

    const [producto, setProducto] = useState([])

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
            console.log('Salió todo bien Mauro')
            
            var array = []

            resultado.map(a => {
                return array.push(<ItemDetail key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />)
            })
            setProducto(array)
        })
        .catch(()=>{
            console.log('Salió todo mal Mauro')
        })
    
    }, [])

    const style = {
        margin: "0.5em",
        paddingLeft: 0,
        listStyle: "none",
        color: "#a9a9a9",
      };
    
    return (
        <div>
            <p className="titulo-pagina" style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
            >
                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            { greeting }
            </p>
            { producto }
        </div>
    );
}

export default ItemDetailContainer
