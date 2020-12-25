import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
    return [
        <>
          <Header/>
          <Main/>
          <Footer/>   
        </>
    ]
}

// SIa alguien llega a hacer un import de este archivo, lo que va a obtener por defecto es la variablle APP
//Commonjs
//module.exports = App
//ES6
export default App;