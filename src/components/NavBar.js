import React from 'react'
import './navBar.css'
import Logo from './Logo';
const NavBar = () => {
  return (
    <div className='menu'>
      
      <nav className='nav'>
        <Logo />
        <ul className='nav-menu'>

          <li className='nav-item'>
          <a href='/' className='nav-link'>Inicio</a>
          </li>

          <li className='nav-item'>
          <a href='/acerca' className='nav-link'>Sobre nosotros</a>          
          </li>

          <li className='nav-item'>
          <a href='/venta'className='nav-link'>Productos</a>
          </li>
          
          <li className='nav-item'>
            <a href='/contacto'className='nav-link'>Contacto</a>
          </li>

        </ul>
      </nav>
    </div>
  )
}


export default NavBar;
