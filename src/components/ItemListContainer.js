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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="container-fluid mb-5 p-0">
          <div className="row p-0 m-0">
              <div className="col-12 p-0 mt-5 pb-3">
                <p className="titulo-pagina m-0" style={style}>
                  <div className="linea"></div>
=======
=======
>>>>>>> parent of 4327304... Item Collection II
      <div className="container">
          <div className="row">
              <div className="col-12 mt-5 pb-3">
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
>>>>>>> parent of 4327304... Item Collection II
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
