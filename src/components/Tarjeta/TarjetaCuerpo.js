import React from 'react'
import "./TarjetaCuerpo.css"

const TarjetaCuerpo = ({children}) => {
  return (
        <div className='tarjeta' data-testid="product-item">
            {children}
        </div>
  )
}

export default TarjetaCuerpo