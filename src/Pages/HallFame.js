import React from 'react'
import Loading from '../Components/Loading'
import { usePlayers } from '../Context/PlayerContext'

const HallFame = () => {
  const { isPlayerLoading } = usePlayers()

  if (isPlayerLoading) return <Loading />
  return <div>Hall of fame page</div>
}

export default HallFame
