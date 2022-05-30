import React from 'react'
import "./Header.css"

const Header = ({children}) => {

  return (
    <div className='headerContainer'>
      <div className='header'>
        {children}
      </div>
    </div>
  )
} 

export default Header