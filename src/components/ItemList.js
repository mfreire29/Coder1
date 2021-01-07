import React, { useState, useEffect } from 'react'
import Item from './Item'

const data = [
    {
	"id": 1,
	"title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 2,
	"title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 3,
	"title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 4,
	"title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 5,
	"title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 6,
	"title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 7,
	"title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 8,
	"title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 9,
	"title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 10,
	"title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 11,
	"title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 12,
	"title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
}
]


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
            <div className="container mb-5">
                <div className="row mb-5 pb-5">
                    { listado }
                </div>
            </div>
        </>
    )
}

export default ItemList
