import React from 'react'
import "./Header.css"

const Header = (props) => {

  const menuSide = document.querySelector('.menuSide')
  

  const handleSideBar = () => {
    document.body.classList.toggle("offSide");
    menuSide.classList.toggle("showMenu");
  }

  return (
    <div className='header'>

        <div>
          {/* <img className='menuSide' onClick={handleSideBar} src={menu} alt="menu" /> */}
          <button className='menuSide' onClick={handleSideBar}>
            <span className='topLine menuSpan'></span>
            <span className='middleLine menuSpan'></span>
            <span className='botLine menuSpan'></span>
          </button>
            {props.title}
        </div>

        <div className="rightSide">
          {props.children}
        </div>
        
    </div>
  )
} 

export default Header