import React from 'react'

const style = {
    border: "solid 1px black",
    width:"1000px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "8px", 
    paddingRight: "8px"  

}

const MockHeader = ({children}) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default MockHeader