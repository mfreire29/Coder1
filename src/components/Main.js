import React from 'react'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import ItemList from './ItemList'
import ItemListContainer from './ItemListContainer'

function Main() {
    
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ItemListContainer greeting="Listado de Productos"/>
                        <ItemDetailContainer  greeting="Detalle de Producto"/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
