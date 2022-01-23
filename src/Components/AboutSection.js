import React from 'react'
import UniverseGods4 from '../images/UniverseGods4.jpg'

import './AboutSection.css'

export const AboutSection = () => {
  return (
    <div className='about-section'>
      <div className='about-container'>
        <div className='about-content-section'>
          <div className='title'>
            <h1>About Universe Gods</h1>
          </div>
          <div className='about-content'>
            <h4>Look for greatness</h4>
            <p className='about-text'>
              It is a strategy video game where you compete against other
              players, Gods from another galaxy to conquer the Universe by
              completing different missions and challenges against other
              players. <br />
              Conquer planets or galaxies... if you can. <br />
              Show your dominance in the cosmos and prove that you are the God
              of the Universe.
            </p>
          </div>
        </div>
        <div className='image-section'>
          <img src={UniverseGods4} alt='UnivG4' />
        </div>
      </div>
    </div>
  )
}
