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

const mockCard = (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default mockCard