import React, { useState } from 'react'

import './SearchBar.css'

const SearchBar = ({ setPage, setSearchUrl }) => {
  const [query, setQuery] = useState({ nickname: '', status: 'All' })

  const handleQueryChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let url = 'http://18.209.14.86:5000/api/players/search?'
    if (query.nickname && query.status === 'All') {
      url = `${url}value=${query.nickname}`
    }
    if (query.status !== 'All' && !query.nickname) {
      url = `${url}status=${query.status}`
    }
    if (query.status !== 'All' && query.nickname) {
      url = `${url}value=${query.nickname}&status=${query.status}`
    }
    setSearchUrl(url)
    setPage(1)
  }

  return (
    <>
      <h5>Search by Status, Specific Id, or Nickname related</h5>
      <form id='search-bar' onSubmit={handleSubmit}>
        <select
          className='select'
          id='status-select'
          name='status'
          value={query.status}
          onChange={handleQueryChange}
        >
          <option id='all-option' value='All'>
            All
          </option>
          <option id='oro-option' value='oro'>
            Gold
          </option>
          <option id='plata-option' value='plata'>
            Silver
          </option>
          <option id='bronce-option' value='bronce'>
            Bronze
          </option>
        </select>
        <input
          className='input-searchBar'
          type='text'
          placeholder='Dolf, 61e9d21eb796664f7cae9eb6'
          id='nickname-input'
          name='nickname'
          value={query.nickname}
          onChange={handleQueryChange}
        />
        <button className='button-search' id='submit-query-btn' type='submit'>
          Search
        </button>
      </form>
    </>
  )
}

export default SearchBar
