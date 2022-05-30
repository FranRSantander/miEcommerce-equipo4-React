import React, {useState, useEffect} from 'react'
import{Link} from "react-router-dom"
import MockCard from '../../../components/MockCard'
import MockHeader from '../../../components/MockHeader'
import flecha from "../../../assets/chevron-right.svg"
import "./ProductsList.css"
import "../../../components/MockCard.css"
import "../../../components/MockHeader.css"

const ProductsList = () => {

  const [productos, setProductos] = useState([]);   /* son los productos traidos de la api y los filtrados */
  const [inputValue, setInputValue] = useState("");
  
  useEffect(()=>{
    fetch("http://localhost:8000/products")
    .then(res=> res.json())
    .then(data=>{
      setProductos(data)
    })
  }, [])

  return (
    <div className="productDiv">
        {/*Header de Lista de Productos*/}  
      <MockHeader title="Products">
        <input className="inputBuscador" type="text" placeholder="Buscar productos..." onChange={(e)=>{setInputValue(e.target.value)}}/>
        <Link to="/products/new"><input className="botonAgregarProd" type="button" id="boton-agregar" value="Agregar Producto"/></Link>
      </MockHeader>
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
            return <MockCard key={product.title+i}>
                    <div className="productInfo">       {/*div que contiene el detalle del producto  */}       
                      <img className="productImg" src={product.image} alt="product" style={{height: "50px", width:"50px", borderRadius:"15px"}}></img>
                      <div>
                        <h4 className="tituloProducto">{product.title}</h4>
                        <span className="idNumber">#{product.id}</span>
                      </div>
                    </div>
                    <div>             {/*div que contiene la flechita  */}
                      <Link to={`/products/${product.id}`}><img href={`/products/:${product.id}`} src={flecha} alt="arrow" ></img></Link>
                    </div>
                  </MockCard>
        })}
          </div>
          :
          <h1 style={{color:"white"}}>Cargando...</h1>
        } 
    {/* <button onClick={consoleL}>click</button> */}
    </div>
  )
}

export default ProductsList