import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemListContainer from './ItemListContainer'

function Main() {
    
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ItemListContainer greeting="Listado de Productos"/>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
