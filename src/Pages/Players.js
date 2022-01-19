import React, { useEffect, useState } from 'react'
import Pagination from '../Components/Pagination'
import SearchBar from '../Components/SearchBar'
import { usePlayers } from '../Context/PlayerContext'

const Players = () => {
  const {
    fetchPlayers,
    searchPlayers,
    players,
    isPlayersLoading,
    totalCount,
    errorMsg,
  } = usePlayers()
  const [page, setPage] = useState(1)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const [searchUrl, setSearchUrl] = useState(null)

  useEffect(() => {
    if (!searchUrl) {
      fetchPlayers(page)
    }
    if (searchUrl) {
      searchPlayers(searchUrl, page)
    }

    //eslint-disable-next-line
  }, [page, searchUrl])

  if (isPlayersLoading) return <pre>Loading...</pre>

  return (
    <section>
      <h3>Players</h3>
      <button
        type='button'
        onClick={() => {
          setSearchUrl(null)
        }}
      >
        Back to All Players
      </button>
      <SearchBar setPage={setPage} setSearchUrl={setSearchUrl} />
      <Pagination
        totalCount={totalCount}
        page={page}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        setMaxPageNumberLimit={setMaxPageNumberLimit}
        setMinPageNumberLimit={setMinPageNumberLimit}
        changePage={setPage}
      />
      {errorMsg && <section>{errorMsg}</section>}
      {players.map((player) => {
        return <article key={player._id}>{player.nickname}</article>
      })}

      <div></div>
    </section>
  )
}

export default Players
