import React from 'react'
import './PaginationStyles.css'

const Pagination = ({
  totalCount,
  page,
  changePage,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
}) => {
  //const dummyCount = 3000

  const pages = []
  for (let i = 1; i <= Math.ceil(totalCount / 100); i++) {
    pages.push(i)
  }
  const handleNextClick = () => {
    changePage(page + 1)
    if (page + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5)
      setMinPageNumberLimit(minPageNumberLimit + 5)
    }
  }

  const handlePrevClick = () => {
    changePage(page - 1)
    if ((page - 1) % 5 === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - 5)
      setMinPageNumberLimit(minPageNumberLimit - 5)
    }
  }

  return (
    <div className='page-numbers'>
      <button
        type='button'
        className='page-btn'
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        Prev
      </button>
      {minPageNumberLimit > 4 && <button className='page-btn'>...</button>}
      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <button
              type='button'
              className={page === number ? 'page-btn active' : 'page-btn'}
              key={number}
              onClick={(e) => changePage(Number(e.target.textContent))}
            >
              {number}
            </button>
          )
        } else {
          return null
        }
      })}
      {pages.length > maxPageNumberLimit && (
        <button className='page-btn'>...</button>
      )}
      <button
        type='button'
        className='page-btn'
        onClick={handleNextClick}
        disabled={page === pages[pages.length - 1]}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
