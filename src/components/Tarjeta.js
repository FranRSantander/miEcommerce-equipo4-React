import React from 'react'
import "./Tarjeta.css"

const Tarjeta = ({imagen, cantidad, texto}) => {
  return (
        <div className='tarjeta'>
          <ol>
            <li><img src = {imagen}/></li>
            <li>{cantidad}</li>
            <li>{texto}</li>
          </ol>
            
            
            
              <div className='botones'>
                <button>Ver Listado</button>
                <button>Agregar Producto</button>
              </div>
        </div>
  )
}

export default Tarjeta