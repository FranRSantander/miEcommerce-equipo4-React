import React from 'react'
import "./Home.css"
import Tarjeta from '../../components/Tarjeta'
import Header from '../../components/Header'
import ImagenProducto from "../../assets/package-variant-closed.svg";
import ImagenTienda from "../../assets/store.svg";


const Home = () => {

  return (
      <div className='contenedorTarjeta'>
        <Tarjeta imagen={ImagenProducto} cantidad={45} texto={"Productos"}/>
      </div> 
  )
}

export default Home