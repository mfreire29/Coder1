import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ greeting }) {

    const data = [
        {
        "id": 1,
        "title": "Remera Hombre",
        "description": "Remera lisa de ALgodón",
        "price": 950.00,
        "stock": 0,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
    },
    {
        "id": 2,
        "title": "Remera Mujer",
        "description": "Remera Rayada blanca",
        "price": 700.00,
        "stock": 14,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
    },
    {
        "id": 3,
        "title": "Remera Niño",
        "description": "Remera de Mickey",
        "price": 650.00,
        "stock": 5,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
    },
    {
        "id": 4,
        "title": "Remera Hombre",
        "description": "Remera lisa de ALgodón",
        "price": 950.00,
        "stock": 2,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
    },
    {
        "id": 5,
        "title": "Remera Mujer",
        "description": "Remera Rayada blanca",
        "price": 700.00,
        "stock": 14,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
    },
    {
        "id": 6,
        "title": "Remera Niño",
        "description": "Remera de Mickey",
        "price": 650.00,
        "stock": 5,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
    },
    {
        "id": 7,
        "title": "Remera Hombre",
        "description": "Remera lisa de ALgodón",
        "price": 950.00,
        "stock": 2,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
    },
    {
        "id": 8,
        "title": "Remera Mujer",
        "description": "Remera Rayada blanca",
        "price": 700.00,
        "stock": 14,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
    },
    {
        "id": 9,
        "title": "Remera Niño",
        "description": "Remera de Mickey",
        "price": 650.00,
        "stock": 5,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
    },
    {
        "id": 10,
        "title": "Remera Hombre",
        "description": "Remera lisa de ALgodón",
        "price": 950.00,
        "stock": 2,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
    },
    {
        "id": 11,
        "title": "Remera Mujer",
        "description": "Remera Rayada blanca",
        "price": 700.00,
        "stock": 14,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
    },
    {
        "id": 12,
        "title": "Remera Niño",
        "description": "Remera de Mickey",
        "price": 650.00,
        "stock": 5,
        "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
    }
    ]

    const [producto, setProducto] = useState([])
    const [loader, setloader] = useState(true)
    const { id } = useParams();

    useEffect(()=>{
        console.log('recibiendo: ', id)
        return() => {
            console.log('recibiendo22: ', id)
        }
    }, [id])
    
    useEffect(()=>{

        const promesa = new Promise((resolver, rechazar)=>{
            setTimeout(() => {
                
                console.log('Termino el pedido')
                let codigo = 200
                
                if(codigo < 400){
                    let dato = data.filter(data => data.id === parseInt(id))
                    resolver(dato)
                } else {
                    rechazar('Hubo un error')
                }
        
            }, 2000);
        })

        promesa
        .then((resultado)=>{
            setProducto(resultado)
            setloader(false)
        })
        .catch(()=>{
            console.log('Salió todo mal')
        })
    
    }, [data])

    const style = {
        margin: "0.5em",
        paddingLeft: 0,
        listStyle: "none",
        color: "#a9a9a9",
      };
    
    return (
        <div>
            <div className="container">
                <div className="row">
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
                    { loader ? 
                            <div class="text-center">
                                <div class="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            ''
                    }
                    {
                        producto.map(a => {
                            return <ItemDetail key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer
