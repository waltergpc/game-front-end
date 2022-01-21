import React, { useState } from 'react'
import { useUser } from '../Context/UserContext'

const SignIn = () => {
  const { register, login, errorMsg } = useUser()
  const [showLogin, setShowLogin] = useState(true)
  const [newUser, setNewUser] = useState({
    nickname: '',
    name: '',
    password: '',
  })
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const submitLogin = (e) => {
    e.preventDefault()
    if (showLogin) {
      login({ ...newUser })
    }
    if (!showLogin) {
      if (newUser.password !== confirmedPassword) {
        setPasswordError('Passwords do not match')
        return
      }
      register({ ...newUser })
    }
    setConfirmedPassword('')
    setPasswordError(null)
    setNewUser({ name: '', nickname: '', password: '' })
  }

  return (
    <section>
      <h3>{showLogin ? 'Login' : 'Register'}</h3>
      {errorMsg && <div>{errorMsg}</div>}
      {passwordError && <div>{passwordError}</div>}
      <p>
        {showLogin
          ? 'If you are not registered, register'
          : 'If you have a user already login'}
        <button
          type='button'
          className='toggle-login'
          onClick={() => setShowLogin(!showLogin)}
        >
          HERE
        </button>
      </p>
      <form onSubmit={submitLogin}>
        {!showLogin && (
          <input
            type='text'
            name='name'
            value={newUser.name}
            placeholder='Enter your name'
            onChange={handleChange}
          />
        )}

        <input
          type='text'
          name='nickname'
          value={newUser.nickname}
          placeholder='Enter your nickname'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={newUser.password}
          placeholder='Enter your password'
          onChange={handleChange}
        />
        {!showLogin && (
          <input
            type='password'
            name='confirmed-password'
            value={confirmedPassword}
            placeholder='confirm your password'
            onChange={(e) => {
              setConfirmedPassword(e.target.value)
            }}
          />
        )}
        <button type='submit' disabled={!newUser.nickname}>
          Sign in
        </button>
      </form>
    </section>
  )
}

export default SignIn
