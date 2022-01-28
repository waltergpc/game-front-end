import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../Components/Loading'
import './PagesCss/HallOfFame.css'

const HallFame = () => {
  const [hof, setHof] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchHallOfFame = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          'http://18.209.14.86:5000/api/players/top-players'
        )

        setHof(data.players)
        setLoading(false)
      } catch (error) {
        setError('SOmthing happened, please try again later')
      }
    }
    fetchHallOfFame()
  }, [])

  if (loading) return <Loading />
  return (
    <div className='top-container'>
      <h3 className='masters-header'>All Time Universe Masters</h3>
      {error && <section className='error-msg'>{error}</section>}
      <div className='top-table-container'>
        <div className='top-players-table'>
          <table>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Nickname</th>
                <th>Name</th>
                <th>Ranking</th>
                <th>Status</th>
                <th>Player ID</th>
              </tr>
            </thead>
            <tbody>
              {hof.map((player) => (
                <tr key={player._id}>
                  <td>
                    <img
                      className='image-profile'
                      src={player.avatar}
                      alt={player.nickname}
                    />
                  </td>
                  <td>{player.nickname}</td>
                  <td>{player.name}</td>
                  <td>{player.ranking}</td>
                  <td>
                    {player.status === 'oro'
                      ? 'Gold'
                      : player.status === 'plata'
                      ? 'Silver'
                      : 'Bronze'}
                  </td>
                  <td>{player._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HallFame
