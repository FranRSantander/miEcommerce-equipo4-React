import React from 'react'
import MockCard from '../../../components/MockCard'
import MockHeader from '../../../components/MockHeader'
import "./ProductsList.css"
import flecha_der from "../../../assets/flecha_der.svg"
import{Link} from "react-router-dom"
import "../../../components/MockCard.css"
import "../../../components/MockHeader.css"
import menu from "../../../assets/menu.png"



const products = [
  {name: "Coca Cola",
  id: 1,
  img: "https://ibb.co/6JbrnKg"
  },
  {name: "Chromecast",
  id: 2,
  img: "url"
  },
  {name: "Monitor",
  id: 3,
  img: "url"
  },
]


const ProductsList = () => {
  return (
    <div className="productDiv">
    {/*Header de Lista de Productos*/}  
      <MockHeader>
        <div className="leftSideHeader">
          <img src={menu} alt="menu" style={{height: "30px", width:"30px"}}/>
          <div className="headerTitle">Productos</div>
        </div>
        

        <div className="rightSideHeader">
          <input className="inputBuscador" type="text" placeholder="Buscar productos..." />
          <Link to="/products/new"><input className="botonAgregarProd" type="button" id="boton-agregar" value="Agregar Producto"/></Link>
        </div>
      </MockHeader>

    {/*Sección del Cuerpo de Lista de Productos*/}  
    <div className="content">
    {products.map((product)=>{ 
      return <MockCard>
              <div className="productInfo">       {/*div que contiene el detalle del producto  */}       
                <img className="productImg" src={product.img} alt="product"></img>
                <div>
                  <h4 className="tituloProducto">{product.name}</h4>
                  <span className="idNumber">#{product.id}</span>
                </div>
              </div>
              <div>             {/*div que contiene la flechita  */}
                <Link to="/"><img href= "/"src={flecha_der} alt="arrow" style={{height: "6px", width: "6px"}}></img></Link>
              </div>
            </MockCard>
    })}

    </div>
    
    </div>
  )
}

export default ProductsList