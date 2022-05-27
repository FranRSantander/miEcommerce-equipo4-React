import React from 'react'
import MockCard from '../../../components/MockCard'
import Header from '../../../components/MockHeader'

import "./ProductsList.css"
import flecha_der from "../../../assets/flecha_der.svg"
import{Link} from "react-router-dom"



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
    <div className="productCard">
    {/*Header de Lista de Productos*/}  
      <Header>
        <div>Productos</div>
        <div>
          <input></input>
          <button>Agregar Producto</button>
        </div>
      </Header>

    {/*Sección del Cuerpo de Lista de Productos*/}  

    {products.map((product)=>{ 
      return <MockCard>
              <div>       {/*div que contiene el detalle del producto  */}       
                <img src={product.img}></img>
                {product.name} <br></br>
               #{product.id}
              </div>
              <div>             {/*div que contiene la flechita  */}
                <Link to="/"><img href= "/"src={flecha_der} style={{height: "6px", width: "6px"}}></img></Link>
              </div>
            </MockCard>
    })}
    
    </div>
  )
}

export default ProductsList