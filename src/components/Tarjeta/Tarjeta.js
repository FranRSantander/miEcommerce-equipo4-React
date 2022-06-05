import React from 'react'
import "./Tarjeta.css"
import TarjetaCuerpo from './TarjetaCuerpo'
import flecha from "../../assets/chevron-right.svg"
import {Link} from "react-router-dom"


const Tarjeta = ({productos, inputValue}) => {
  return (
        <>
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
            return <TarjetaCuerpo key={product.title+i} >
                    <div className="productInfo">          
                      <img className="productImg" src={product.image} alt="product" style={{height: "50px", width:"50px", borderRadius:"15px"}}></img>
                      <div>
                        <h4 className="tituloProducto">{product.title}</h4>
                        <span className="idNumber">#{product.id}</span>
                      </div>
                    </div>
                    <div>             {/*div que contiene la flechita  */}
                      <Link to={`/products/${product.id}`}><img src={flecha} alt="arrow" /></Link>
                    </div>
                  </TarjetaCuerpo>
        })}
          </div>
          :
          <h1 style={{color:"white"}}>Cargando...</h1>
        }
        </>
           
        
  )
}

export default Tarjeta