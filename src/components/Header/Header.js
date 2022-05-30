import React from 'react'
import "./Header.css"

const Header = (props) => {

  return (
    <div className='headerContainer'>
      <div className='header'>
        <div>
          {props.title}
        </div>
        {props.children}
      </div>
    </div>
  )
} 

export default Header