import React from 'react'
import ItemCount from './ItemCount'

function Item({id, title, stock, description, price, pictureUrl}) {
    return (
        <>
                <div className="col-xs-12 col-sm-6 col-md-4 my-5 pb-5">
                    <img src={pictureUrl} className="img-fluid efecto" />
                    <h5 className="card-title text-center my-0 py-0 pt-3">{title}</h5>
                    <p className="card-text text-center my-0 py-0">{description}</p>
                    <h3 className="card-text text-center mt-2"><b>${price}.-</b></h3>
                        <ItemCount stock={stock} initial={1}/>

                    
                </div>
        </>
    )
}

export default Item
