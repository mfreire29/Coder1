import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ greeting, data }) {

    const [producto, setProducto] = useState([])
    const [loader, setloader] = useState(true)
    const { id } = useParams();
    
    useEffect(()=>{

        let dato = data.filter(data => data.id === parseInt(id))
        setProducto(dato)
        setloader(false)
                
    }, [id, data])

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
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                </div>
                            </div> 
                        :
                            ''
                    }
                    {
                        producto.map(a => {
                            return <ItemDetail key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer
