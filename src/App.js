import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Listado de Productos"/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Listado de Productos"/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer greeting="Detalle de Producto"/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    )
    /*
    [
        <>
          <Header/>
          <Main/>
          <Footer/>   
        </>
    ]
    */
}

// SIa alguien llega a hacer un import de este archivo, lo que va a obtener por defecto es la variablle APP
//Commonjs
//module.exports = App
//ES6
export default App;