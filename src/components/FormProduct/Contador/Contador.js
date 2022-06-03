import React from 'react'
import './Contador.css'

const Contador = () => {
  return (
    <>
    <h3>Stock</h3>
      <div className='counterBody'>
        <button className='counter less'>-</button>
        <span >11</span>
        <button className='counter more'>+</button>
      </div>
    </>
  )
}

export default Contador