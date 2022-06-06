
import React, {useState, useEffect} from 'react'
import{Link} from "react-router-dom"

import TarjetaCuerpo from '../../../components/Tarjeta/TarjetaCuerpo'
import Header from '../../../components/Header/Header'
import flecha from "../../../assets/chevron-right.svg"

// import "../../../components/Tarjeta/Tarjeta.css"
import "./ProductsList.css"
import "../../../components/Header/Header.css"

import { getProducts } from '../../../utils/api'


const ProductsList = () => {

  const [inputValue, setInputValue] = useState("");

   function useProduct(){

    const [productos, setProductos] = useState([]);   
    
    useEffect(()=>{
      getProducts()
      .then(res=> res.json())
      .then(data=>{
        setProductos(data)
      })
    }, [])

    return {productos}

  }

  const {productos} = useProduct();
 
  return (
    <div className="productDiv">
        {/*Header de Lista de Productos*/}  
      <Header title="Products">
        <input className="inputBuscador" type="text" placeholder="Buscar productos..." onChange={(e)=>{setInputValue(e.target.value)}}/>
        <Link to="/products/new"><input className="botonAgregarProd" type="button" id="boton-agregar" value="Agregar Producto"/></Link>
      </Header>
      <Tarjeta 
        productos={productos}
        inputValue={inputValue}
      />
    </div>
  )
}

export default ProductsList 