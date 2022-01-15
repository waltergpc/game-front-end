import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <>
      <HeaderWrapper>
        <h1 className='game-title' id='game-title'>
          Game Challenge
        </h1>
        <button type='button' className='sidebar-btn' id='sidebar-btn'>
          Mobile Menu
        </button>

        <nav className='navbar'>
          <ul className='nav-list'>
            <li>
              <Link to='/'>About Game</Link>
            </li>
            <li>
              <Link to='/sign-in'>Sign-in</Link>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
      <main>{children}</main>
    </>
  )
}

export default Layout

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 2rem;

  .sidebar-btn {
    width: fit-content;
    justify-self: end;
  }

  .navbar {
    display: none;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;

    .sidebar-btn {
      display: none;
    }

    .navbar {
      display: block;
    }

    .nav-list {
      display: flex;
      justify-content: space-evenly;
    }
  }
`
