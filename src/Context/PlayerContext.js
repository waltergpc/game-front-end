import React, { useReducer, createContext, useContext } from 'react'
import Reducer from '../Reducers/PlayerReducer'
import axios from 'axios'

const PlayerContext = createContext()

export const usePlayers = () => useContext(PlayerContext)

const initialState = {
  players: [],
  totalCount: 0,
  isPlayersLoading: false,
  errorMsg: null,
  searchKey: '',
}

export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }

  const fetchPlayers = async (page) => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/players?page=${page}`
      )
      dispatch({ type: 'FETCH_PLAYERS', payload: data })
      console.log(data)
    } catch (error) {
      console.log(error.response)
      dispatch({
        type: 'FETCH_PLAYERS_ERROR',
        payload: error.response.data.msg,
      })
    }
  }

  const searchPlayers = async (url, page) => {
    setLoading()
    console.log(url)
    console.log(page)
    try {
      const { data } = await axios.get(url + `&page=${page}`)
      dispatch({ type: 'FETCH_PLAYERS', payload: data })
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <PlayerContext.Provider value={{ ...state, fetchPlayers, searchPlayers }}>
      {children}
    </PlayerContext.Provider>
  )
}
