import React, { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/UserReducer'
import axios from 'axios'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const initialState = {
  user: null,
  isUserLoading: false,
  errorMsg: null,
  isPlayersLoading: false,
  players: [],
  updateUserComplete: false,
  updateMsg: null,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }

  const register = async (user) => {
    setLoading()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/register',
        { ...user }
      )
      console.log(data)
      dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.nickname, token: data.token })
      )
    } catch (error) {
      dispatch({ type: 'REGISTER_ERROR', payload: error.response.data.msg })
    }
  }

  const login = async (user) => {
    setLoading()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/auth/login',
        { ...user }
      )
      console.log(data)
      dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.nickname, token: data.token })
      )
    } catch (error) {
      console.log(error.response)
      dispatch({ type: 'REGISTER_ERROR', payload: error.response.data.msg })
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <UserContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
