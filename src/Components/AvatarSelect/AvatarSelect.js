import React from 'react'
import { avatarOptions } from '../../Utils/AvatarOptions'

import './AvatarSelectStyles.css'

const AvatarSelect = ({ setUpdatedUser, updatedUser }) => {
  const handleClick = (e) => {
    setUpdatedUser({ ...updatedUser, avatar: e.target.id })
  }

  return (
    <div className='avatar-select-div' id='avatar-select-div'>
      <div className='avatar-select-glass-div'>
        {avatarOptions.map((avatar) => {
          const { src, alias } = avatar
          return (
            <article
              className={
                updatedUser.avatar === src
                  ? 'avatar-option current'
                  : 'avatar-option'
              }
              key={alias}
              id={src}
              onClick={handleClick}
            >
              <img className='avatar-img' id={src} src={src} alt={alias} />
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default AvatarSelect
