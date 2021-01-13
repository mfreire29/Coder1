import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

const data = [
    {
	"id": 1,
    "category": 1,
    "title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950.00,
    "stock": 0,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 2,
    "category": 1,
    "title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700.00,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 3,
    "category": 1,
    "title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650.00,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 4,
    "category": 1,
    "title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950.00,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 5,
    "category": 1,
    "title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700.00,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 6,
    "category": 1,
    "title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650.00,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 7,
    "category": 1,
    "title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950.00,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 8,
    "category": 1,
    "title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700.00,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 9,
    "category": 1,
    "title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650.00,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 10,
    "category": 1,
    "title": "Remera Hombre",
    "description": "Remera lisa de ALgodón",
    "price": 950.00,
    "stock": 2,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/cb/cb27/F100012457-hombre_sexy_joven_frente_al_mar.jpg',
},
{
	"id": 11,
    "category": 1,
    "title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700.00,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 12,
    "category": 1,
    "title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650.00,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
},
{
	"id": 13,
    "category": 2,
    "title": "Remera Mujer",
    "description": "Remera Rayada blanca",
    "price": 700.00,
    "stock": 14,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/9d/9d0c/F100012464-hombre_con_camisa_floreada_y_lentes_en_verano.jpg',
},
{
	"id": 14,
    "category": 2,
    "title": "Remera Niño",
    "description": "Remera de Mickey",
    "price": 650.00,
    "stock": 5,
    "pictureUrl": 'https://www.freejpg.com.ar/image-900/a4/a451/F100012458-hombre_adulto_con_barba_colorada_con_mirada_de_seguridad.jpg',
}
]


function ItemList() {
    
    const { id } = useParams();

    const [listado, setlistado] = useState([])

    const [loader, setloader] = useState(true)

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
            setlistado(resultado)
            setloader(false)
        })
        .catch(()=>{
            console.log('Salió todo mal')
        })
    
    }, [listado])

    return (
        <>
                {
                    id ?
                        <h3 className="text-center">{ "Categoría " + parseInt( id ) }</h3>
                    :
                    <h3 className="text-center">Todos nuestros productos</h3>
                }

                { loader ? 
                    <div class="text-center mt-5">
                        <div class="spinner-border" role="status">
                        </div>
                    </div> 
                :
                    ''
                }   
                
                {
                    id ?
                        listado.filter(item => item.category === parseInt( id )).map(a => {
                            return <Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />
                        })
                    :
                        listado.map(a => {
                            return <Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />
                        })
                    
                }
                
        </>
    )
}

export default ItemList
