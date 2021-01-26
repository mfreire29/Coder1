import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Firestore } from '../firebaseConfig'


function ItemDetailContainer({ greeting, data }) {

    const [producto, setProducto] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams();

    useEffect(() => {

        const db = Firestore
        const collection = db.collection("items").doc(id)
        const query = collection.get()
      
        query
        .then((res) =>{
          //console.log(res.data())
        
          setProducto(res.data())
          setLoader(false)
        })
        .catch(() => {
          console.log("falló")
        })
      }, [])
    
    /* useEffect(()=>{


        let dato = datproducto.filter(data => datproducto.id === id)
        setProducto(dato)
        setloader(false)
                
    }, [id, data]) */

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
                    
                    <ItemDetail key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price} stock={producto.stock} pictureUrl={producto.pictureUrl}/>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer
