import React from 'react'
import ItemCount from './ItemCount'
import ItemListContainer from './ItemListContainer'

function Main() {
    
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ItemListContainer greeting="Listado de Productos"/>
                        <ItemCount stock={5} initial={1}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
