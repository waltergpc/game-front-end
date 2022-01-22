import React, { useState, useEffect } from 'react'
import { useUser } from '../Context/UserContext'
import { Navigate, Link } from 'react-router-dom'
import AvatarSelect from '../Components/AvatarSelect'
import Loading from '../Components/Loading'

const UpdateUser = () => {
  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    nickname: '',
    avatar: '',
  })
  const { user, updateUser, startUpdate, updateMessage, userLoading } =
    useUser()

  console.log(updatedUser)

  useEffect(() => {
    startUpdate()
    if (user) {
      setUpdatedUser({
        name: user.name,
        nickname: user.nickname,
        avatar: user.avatar,
      })
    }
    // eslint-disable-next-line
  }, [])

  if (!user) return <Navigate to='/home' />

  if (userLoading) return <Loading />

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.playerId, updatedUser)
  }

  return (
    <section>
      {updateMessage && <div className='success-msg'>{updateMessage}</div>}
      <form id='update-from' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={updatedUser.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='nickname'
          value={updatedUser.nickname}
          onChange={handleChange}
        />
        <AvatarSelect
          setUpdatedUser={setUpdatedUser}
          updatedUser={updatedUser}
        />
        <button type='submit'>Update</button>
      </form>
      <Link to='/dashboard' onClick={startUpdate}>
        Back to Profile
      </Link>
    </section>
  )
}

export default UpdateUser
