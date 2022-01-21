import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../Context/UserContext'

import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const { user, logout } = useUser()

  const logOutUser = () => {
    onClick()
    logout()
  }

  return (
    <div className='btn-align'>
      {!user ? (
        <Link id='Sign-in Button ' to='/sign-in' className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      ) : (
        <Link id='Sign-in Button ' to='/' className='btn-mobile'>
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={logOutUser}
            type={type}
          >
            {children}
          </button>
        </Link>
      )}
    </div>
  )
}
