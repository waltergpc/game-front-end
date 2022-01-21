import React from 'react'
import { useUser } from '../Context/UserContext'
import { Link, Navigate } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useUser()

  if (!user) return <Navigate to='/home' />

  return (
    <section id='user-card'>
      <div id='avatar'>
        <img src={user.avatar} alt={user.nickname} />
      </div>
      <div id='user-info'>
        <h4 id='user-name'>Name: {user.name}</h4>
        <h4 id='user-nickname'>Nickname: {user.nickname}</h4>
        <h4 id='user-id'>Player Id: {user.playerId}</h4>
        <h4 id='user-status'>Status: {user.status}</h4>
        <h4 id='user-ranking'>Ranking: {user.ranking}</h4>
      </div>
      <Link to='/update-user'>Update your user here</Link>
    </section>
  )
}

export default Dashboard
