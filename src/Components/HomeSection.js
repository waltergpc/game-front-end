import React, { useState } from 'react'
import {Button} from './Button'

import './HomeSection.css'

export const HomeSection = () => {


    return (
        <div className='home-container'>
            <h1>FIGHT FOR THE UNIVERSE</h1>
            <p>The power is yours</p>
            <div className='home-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}