import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.css';
import home from '../../assets/home.svg'
import box from '../../assets/box.svg'
import store from '../../assets/store.svg'

function SideBar () {
    return(
        <div className='sideBar'>
            <div className='sideBarContent'>
                <figure className='logoBlock'>
                    <Link className="logoLink" to='/'><span className='logo1'>Mi</span><span className='logo2'>Ecommerce</span></Link>
                </figure>
                <nav className='navSide'>
                    <ul className='navList'>
                        <li className='navItem'><NavLink className='navLink' to='/'><img src={home}/><span>Inicio</span></NavLink></li>
                        <li className='navItem'><NavLink className='navLink' to='/products'><img src={box}/><span>Productos</span></NavLink></li>
                        <li className='navItem'><NavLink className='navLink' to='stores'><img src={store}/><span>Tiendas</span></NavLink></li>
                    </ul>
                </nav>
            </div>
            <figure className='userBlock'>
                <Link className="userLink" to='*'><img src=''/><span className='userName'>Olivia</span></Link>
            </figure>
        </div>
    );
}

export default SideBar;