import React from 'react';
import TarjetaCuerpo from '../../components/Tarjeta/TarjetaCuerpo';
import Header from '../../components/Header/Header';

import "../../components/Tarjeta/Tarjeta.css"
import home from '../../assets/home.svg'
import store from '../../assets/store.svg'

const Home = () => {
  return (
    <>
        <Header title="¡Hola Olivia!">

        </Header>

        <TarjetaCuerpo>
            <div className='contenedor'>
              <img src = {home} alt="imagen"/>
              <div className='numero'>123</div>
              <div>Produuctos</div>
            </div>
            <div className='botones'>
                <button className='botonTarjeta' type='button'>Ver Listado</button>
                <button className='botonTarjeta' type='button'>Agregar Producto</button>
            </div>
        </TarjetaCuerpo>
        <TarjetaCuerpo>
            <div className='contenedor'>
              <img src = {store} alt="imagen"/>
              <div className='numero'>10</div>
              <div>Tiendas</div>
            </div>
            <div className='botones'>
                <button className='botonTarjeta' type='button'>Ver Listado</button>
                <button className='botonTarjeta' type='button'>Agregar Tiendas</button>
            </div>
        </TarjetaCuerpo>
        
    
    </>
  )
}

export default Home;