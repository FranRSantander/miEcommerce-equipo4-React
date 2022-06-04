
import React, {useState, useEffect} from 'react'
import Tarjeta from '../../../components/Tarjeta/Tarjeta'
import Header from '../../../components/Header/Header'
import "./ProductsList.css"
import "../../../components/Tarjeta/Tarjeta.css"
import "../../../components/Header/Header.css"
import { getProducts } from '../../../utils/api'
import { Link } from 'react-router-dom'

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

    return {productos, inputValue}

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