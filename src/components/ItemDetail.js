import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({ id, title, stock, description, price, pictureUrl }) {
    return (
        <>  
            <div className="col-xs-12 col-sm-6">
                <img src={pictureUrl} className="img-fluid" alt={ description }/>
            </div>
            <div className="col-xs-12 col-sm-6">
                <h1>{ title }</h1>
                <h5>{ description }</h5>
                <h1 className="mt-5 text-center"><span className="text-danger"><b>${ price }.-</b></span><br/>pesos argentinos</h1>
                <div className="mt-5">
                    <p className="text-muted text-center">Stock Disponible: { stock }</p>
                    <ItemCount stock={stock} initial={1}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
