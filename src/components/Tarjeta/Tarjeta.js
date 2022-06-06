import React from 'react'
import "./Tarjeta.css"
import TarjetaCuerpo from './TarjetaCuerpo'

const Tarjeta = ({imagen, cantidad, texto}) => {
  return (
        <TarjetaCuerpo>
            <div className='contenedor'>
              <img src = {imagen} alt="imagen"/>
              <div className='numero'>{cantidad}</div>
              <div>{texto}</div>
            </div>
              <div className='botones'>
                <button>Ver Listado</button>
                <button>Agregar Producto</button>
              </div>
        </TarjetaCuerpo>
  )
}

export default Tarjeta