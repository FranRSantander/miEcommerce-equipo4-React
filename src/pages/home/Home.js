import React from 'react';
import TarjetaCuerpo from '../../components/Tarjeta/TarjetaCuerpo';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom'

import "../../components/Tarjeta/Tarjeta.css"
import home from '../../assets/home.svg'
import store from '../../assets/store.svg'

const Home = () => {
  return (
    <>
        <Header title="¡Hola Olivia!">

        </Header>

        <div className='beforeHeaderContainer'>
            <TarjetaCuerpo>
                <div className='contenedor'>
                <img src = {home} alt="imagen"/>
                <div className='numero'>123</div>
                <div>Produuctos</div>
                </div>
                <div className='botones'>
                    <Link to='/products' className='linkBoton'><button type='button' className='botonTarjeta'>Ver Listado</button></Link>
                    <Link to='/products/new' className='linkBoton'><button type='button' className='botonTarjeta'>Agregar Producto</button></Link>
                </div>
            </TarjetaCuerpo>
            <TarjetaCuerpo>
                <div className='contenedor'>
                <img src = {store} alt="imagen"/>
                <div className='numero'>10</div>
                <div>Tiendas</div>
                </div>
                <div className='botones'>
                <Link to='#' className='linkBoton'><button type='button' className='botonTarjeta'>Ver Listado</button></Link>
                <Link to='#' className='linkBoton'><button type='button' className='botonTarjeta'>Agregar Tienda</button></Link>
                </div>
            </TarjetaCuerpo>
        </div>
    
    </>
  )
}

export default Home;