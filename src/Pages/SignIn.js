import React, { useState } from 'react'
import { useUser } from '../Context/UserContext'

const SignIn = () => {
  const { register, login } = useUser()
  const [showLogin, setShowLogin] = useState(true)
  const [newUser, setNewUser] = useState({
    nickname: '',
    name: '',
    password: '',
  })

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
    console.log(newUser)
  }

  const submitLogin = (e) => {
    e.preventDefault()
    if (showLogin) {
      login({ ...newUser })
    }
    if (!showLogin) {
      register({ ...newUser })
    }
    setNewUser({ name: '', nickname: '', password: '' })
  }

  return (
    <section>
      <h3>{showLogin ? 'Login' : 'Register'}</h3>
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
        <button type='submit' disabled={!newUser.nickname}>
          Sign in
        </button>
      </form>
    </section>
  )
}

export default SignIn
