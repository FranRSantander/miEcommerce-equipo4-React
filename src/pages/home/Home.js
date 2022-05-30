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
                <button>Ver Listado</button>
                <button>Agregar Producto</button>
              </div>
        </TarjetaCuerpo>
        <TarjetaCuerpo>
            <div className='contenedor'>
              <img src = {store} alt="imagen"/>
              <div className='numero'>10</div>
              <div>Tiendas</div>
            </div>
              <div className='botones'>
                <button>Ver Listado</button>
                <button>Agregar Producto</button>
              </div>
        </TarjetaCuerpo>
        <h2>Y aca el contenido del Home</h2>
    
    </>
  )
}

export default Home;
