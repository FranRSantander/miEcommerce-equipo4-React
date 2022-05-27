import './NavMenu.css'
import { Link, NavLink } from 'react-router-dom'

function NavMenu() {
    <div className='sideBar'>
        <figure className='logoBlock'>
            <Link className="logoLink" to='/'><span className='logo1'>Mi</span><span className='logo2'>Ecommerce</span></Link>
        </figure>
        <nav className='navSide'>
            <ul className='navList'>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/products'>Productos</NavLink></li>
                <li><NavLink to='stores'>Tiendas</NavLink></li>
            </ul>
        </nav>
        <figure className='userBlock'>
            <Link className="userLink" to='*'><img src=''/><span className='userName'>Olivia</span></Link>
        </figure>
    </div>
}

export default NavMenu;