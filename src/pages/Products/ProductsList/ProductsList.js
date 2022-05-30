import React, {useState, useEffect} from 'react'
import{Link} from "react-router-dom"
// import MockCard from '../../../components/MockCard'
import TarjetaCuerpo from '../../../components/Tarjeta/TarjetaCuerpo'
// import MockHeader from '../../../components/MockHeader'
import Header from '../../../components/Header/Header'
import flecha from "../../../assets/chevron-right.svg"
import "./ProductsList.css"
// import "../../../components/MockCard.css"
import "../../../components/Tarjeta/Tarjeta.css"
import "../../../components/Header/Header.css"
import { getProducts } from '../../../utils/api'

const ProductsList = () => {

  const [productos, setProductos] = useState([]);   
  const [inputValue, setInputValue] = useState("");
  
  useEffect(()=>{
    getProducts()
    .then(res=> res.json())
    .then(data=>{
      setProductos(data)
    })
  }, [])

  return (
    <div className="productDiv">
        {/*Header de Lista de Productos*/}  
      <Header title="Products">
        <input className="inputBuscador" type="text" placeholder="Buscar productos..." onChange={(e)=>{setInputValue(e.target.value)}}/>
        <Link to="/products/new"><input className="botonAgregarProd" type="button" id="boton-agregar" value="Agregar Producto"/></Link>
      </Header>
        {/*Sección del Cuerpo de Lista de Productos*/} 
        {(productos.length > 0) ?
          <div className="content">
            {productos.filter(element =>{
              if(inputValue === ""){
                return element;
              }else if(element.title.toLowerCase().includes(inputValue.toLowerCase())){
                return element;
              }else{
                return null
              }
            }).map((product, i)=>{                                  
            return <TarjetaCuerpo key={product.title+i}>
                    <div className="productInfo">          
                      <img className="productImg" src={product.image} alt="product" style={{height: "50px", width:"50px", borderRadius:"15px"}}></img>
                      <div>
                        <h4 className="tituloProducto">{product.title}</h4>
                        <span className="idNumber">#{product.id}</span>
                      </div>
                    </div>
                    <div>             {/*div que contiene la flechita  */}
                      <Link to={`/products/${product.id}`}><img href={`/products/:${product.id}`} src={flecha} alt="arrow" ></img></Link>
                    </div>
                  </TarjetaCuerpo>
        })}
          </div>
          :
          <h1 style={{color:"white"}}>Cargando...</h1>
        }
    </div>
  )
}

export default ProductsList