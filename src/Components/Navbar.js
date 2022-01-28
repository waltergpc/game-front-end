import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../Context/UserContext'
import { Button } from './Button'

import './Navbar.css'

export const Navbar = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  const [button, setButton] = useState(true)

  const { user } = useUser()

  const handleClick = () => setNavOpen(!navOpen)
  const closeMobileMenu = () => setNavOpen(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
      setNavOpen(false)
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
            <i className={navOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul
            className={navOpen ? 'nav-menu active' : 'nav-menu'}
            onClick={closeMobileMenu}
          >
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/hof' className='nav-links' onClick={closeMobileMenu}>
                Hall of Fame
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/players'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Players
              </Link>
            </li>
            {user && (
              <li className='nav-item'>
                <Link
                  to='/dashboard'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  My hero
                </Link>
              </li>
            )}
            <Button buttonStyle='btn--outline' onClick={closeMobileMenu}>
              {!user ? 'Sign-In' : 'Logout'}
            </Button>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}
