import React from 'react'
import menu from "../assets/menu.svg"

const MockHeader = (props) => {
  return (
    <div className="header">
      <div className="leftSideHeader">
        <img src={menu} alt="menu" />
        <div className="headerTitle">{props.title}</div>
      </div>
      <div className="rightSideHeader">
        {props.children}
      </div>
      
    </div>
  )
}

export default MockHeader