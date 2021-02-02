import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import SliderCategorias from "./SliderCategorias";
//import {CartContext} from '../context/cartContext'

function ItemListContainer({ greeting, data, loader }) {
  
  const style = {
    paddingLeft: 0,
    listStyle: "none"
  };

  const { id } = useParams()
  const [listado, setListado] = useState([])

  useEffect(()=>{

      if(id) {
        const categoria = data.filter(a => a.category_id === parseInt(id) )
        setListado(categoria)
        //console.log(data)
      } else {
        setListado(data)
      }
  
  }, [data, id])

  return (
    <>
      <div className="container-fluid mb-5 p-0">
          <div className="row p-0 m-0">
              <div className="col-12 p-0 mt-5 pb-3">
                <p className="titulo-pagina m-0" style={style}>
                  <div className="linea"></div>
                  {greeting}
                </p>
                <SliderCategorias/>    
              </div>
              <ItemList listado={ listado } loader={ loader }/>
          </div>
      </div>
      
    </>
  );
}

export default ItemListContainer;
