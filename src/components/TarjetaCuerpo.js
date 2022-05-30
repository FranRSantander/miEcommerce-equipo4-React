import React from 'react'
import "./TarjetaCuerpo.css"

const TarjetaCuerpo = ({children}) => {
  return (
        <div className='tarjeta'>
            {children}
        </div>
  )
}

export default TarjetaCuerpo