import React, { useState } from 'react'

const SearchBar = ({ setPage, setSearchUrl }) => {
  const [query, setQuery] = useState({ nickname: '', status: 'All' })
  const [queryId, setQueryId] = useState('')

  console.log(query)

  const handleQueryChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let url = 'http://localhost:5000/api/players/search?'
    if (query.nickname && query.status === 'All') {
      url = `${url}nicknameValue=${query.nickname}`
    }
    if (query.status !== 'All' && !query.nickname) {
      url = `${url}status=${query.status}`
    }
    if (query.status !== 'All' && query.nickname) {
      url = `${url}nicknameValue=${query.nickname}&status=${query.status}`
    }
    setSearchUrl(url)
    setPage(1)
  }

  const handleIdSubmit = (e) => {
    e.preventDefault()
    setSearchUrl(`http://localhost:5000/api/players/search?id=${queryId}`)
    setPage(1)
  }

  return (
    <>
      <form id='search-bar' onSubmit={handleSubmit}>
        <select
          id='status-select'
          name='status'
          value={query.status}
          onChange={handleQueryChange}
        >
          <option id='all-option' value='All'>
            All
          </option>
          <option id='oro-option' value='oro'>
            Oro
          </option>
          <option id='plata-option' value='plata'>
            Plata
          </option>
          <option id='bronce-option' value='bronce'>
            Bronce
          </option>
        </select>
        <input
          type='text'
          placeholder='Search by nickname'
          id='nickname-input'
          name='nickname'
          value={query.nickname}
          onChange={handleQueryChange}
        />
        <button id='submit-query-btn' type='submit'>
          Search
        </button>
      </form>
      <form id='search-id-form' onSubmit={handleIdSubmit}>
        <input
          type='text'
          placeholder='Search by specific id'
          id='id-input'
          name='id'
          value={queryId}
          onChange={(e) => setQueryId(e.target.value)}
        />
        <button id='submit-id-btn' type='submit'>
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar
