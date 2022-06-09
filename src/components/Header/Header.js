import { useContext } from 'react'
import { onClickOutsideContext } from '../../context/OnClickOutsideContext'

import "./Header.css"
import menu from '../../assets/menu.svg'

const Header = (props) => {

    const { isShown, setIsShown }  = useContext(onClickOutsideContext);

  return (
    <div className='header'>

        <div>
            {
                !isShown
                ?
                <img className='muestraImg' src={menu} alt="menu" onClick={() => setIsShown(x => !x)} />
                :
                null
            }
            {props.title}
        </div>

        <div className="rightSide">
            {props.children}
        </div>
        
    </div>
  )
} 

export default Header