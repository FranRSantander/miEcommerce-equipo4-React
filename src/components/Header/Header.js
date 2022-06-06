import React from 'react'
import "./Header.css"
import menu from "../../assets/menu.svg"

const Header = (props) => {

  return (
    <div className='header'>
      
          <div>
            <img src={menu} alt="menu" />
            {props.title}
          </div>

          <div className="rightSide">
            {props.children}
          </div>
      
    </div>
  )
} 

export default Header