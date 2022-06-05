import React, { useContext } from 'react';
import { themeContext } from '../../context/ThemeContext';
import { Link, NavLink } from 'react-router-dom';

import './SideBar.css';
import home from '../../assets/home.svg'
import box from '../../assets/box.svg'
import store from '../../assets/store.svg'
import user from '../../assets/user.jpg'

function SideBar () {

    // A través del context que importe, uso la funcion handleTheme en el onClick del boton del tema
    const handleTheme = useContext(themeContext);

    return(
        <div className="sideBar">
            <div className='sideBarContent'>
                <figure className='logoBlock'>
                    <Link className="logoLink" to='/'><span className='logo1'>Mi</span><span className='logo2'>Ecommerce</span></Link>
                </figure>
                <nav className='navSide'>
                    <ul className='navList'>
                        <li className='navItem'><NavLink className='navLink' to='/'><img className='navLogo' src={home} alt='home-vecto' /><span>Inicio</span></NavLink></li>
                        <li className='navItem'><NavLink className='navLink' to='/products'><img className='navLogo' src={box} alt='caja-vector' /><span>Productos</span></NavLink></li>
                        <li className='navItem'><NavLink className='navLink' to='stores'><img className='navLogo' src={store} alt='tienda-vector' /><span>Tiendas</span></NavLink></li>
                    </ul>
                    <button type="button" className="themeButton" onClick={handleTheme}>Cambiar tema Oscuro/Claro</button>
                </nav>
            </div>
            <figure className="userBlock">
                <Link className="userLink" to='#'><img className='userIcon' src={user} alt='usuario'/><span className='userName'>Olivia</span></Link>
            </figure>
        </div>
    );
}

export default SideBar;
