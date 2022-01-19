import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

import './Navbar.css'

export const Navbar = ({ children }) => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav id='Navbar' className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Universe Gods <i className='fas fa-globe-americas' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/halloffame'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hall of Fame
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
                <Button buttonStyle='btn--outline' onClick={closeMobileMenu} >Sign-In</Button>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}
