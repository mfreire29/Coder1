import React from 'react'
import ItemCount from './ItemCount'

function Item({id, title, stock, description, price, pictureUrl}) {
    return (
        <>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <p className="text-center text-muted">{pictureUrl}</p>
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{description}</p>
                    <h5 className="card-text text-center text-danger"><b>${price}</b></h5>
                    <div className="text-center">
                        <ItemCount stock={stock} initial={1}/>
                    </div>
                    
                </div>
        </>
    )
}

export default Item
