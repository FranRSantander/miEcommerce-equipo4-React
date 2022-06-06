import React from 'react'
import './Contador.css'

const Contador = () => {
  return (
    <>
    <h3>Stock</h3>
      <div className='counterBody'>
        <button type="button" className='counter less'>-</button>
        <span >11</span>
        <button type="button" className='counter more'>+</button>
      </div>
    </>
  )
}

export default Contador