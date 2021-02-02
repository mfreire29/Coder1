import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'

function ItemList({ listado, loader }) {

    const style = {
        paddingLeft: 0,
        listStyle: "none"
    };

    const { id } = useParams();

    return (
        <>
                {
                    id ?
                        <h3 className="text-center">{  parseInt(id) === 1 ? 'Mujer' : 'Hombre' }</h3>
                    :
                    <>
                        <p className="titulo-pagina my-3" style={style}>
                            <div className="linea"></div>
                            Productos Destacados
                        </p>    
                    </>
                }

                { loader ? 
                    <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
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
