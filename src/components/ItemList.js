import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function ItemList({ listado, loader }) {

    const { nombre } = useParams();

    return (
        <>
                {
                    nombre ?
                        <h3 className="text-center">{  ( nombre ) }</h3>
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
                    
                    listado.map(a => {
                        return <Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} />
                    })
                    
                }
                
        </>
    )
}

export default ItemList
