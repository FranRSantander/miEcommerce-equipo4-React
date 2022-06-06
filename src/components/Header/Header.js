import React from 'react'
import "./Header.css"
import menu from "../../assets/menu.svg"

const Header = (props) => {

  return (
    <div className='header'>
<<<<<<< HEAD
      
          <div>
            <img src={menu} alt="menu" />
            {props.title}
          </div>

          <div className="rightSide">
            {props.children}
          </div>
      
=======

        <div>
        <img src={menu} alt="menu" />
        {props.title}
        </div>

        <div className="rightSide">
        {props.children}
        </div>
        
>>>>>>> 77cd03cd7a4df9a9044e8c8fb692ff967844e9c1
    </div>
  )
} 

export default Header