import React, { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/UserReducer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../axios'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const initialState = {
  user: null,
  userLoading: false,
  errorMsg: null,
  updateUserComplete: true,
  updateMessage: null,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  let navigate = useNavigate()

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
      dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.nickname, token: data.token })
      )
      navigate('/dashboard')
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
      dispatch({ type: 'REGISTER_SUCCESS', payload: data.user })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.nickname, token: data.token })
      )
      navigate('/dashboard')
    } catch (error) {
      console.log(error.response)
      dispatch({ type: 'REGISTER_ERROR', payload: error.response.data.msg })
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const startUpdate = () => {
    dispatch({ type: 'START_USER_UPDATE' })
  }

  const updateUser = async (id, user) => {
    setLoading()
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/api/players/${id}`,
        {
          ...user,
        }
      )
      dispatch({ type: 'UPDATE_USER', payload: data.user })
      localStorage.setItem(
        'user',
        JSON.stringify({ name: data.user.nickname, token: data.token })
      )
    } catch (error) {
      console.log(error.response)
      dispatch({ type: 'UPDATE_USER_ERROR', payload: error.response.data.msg })
    }
  }

  return (
    <UserContext.Provider
      value={{ ...state, register, login, logout, startUpdate, updateUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
