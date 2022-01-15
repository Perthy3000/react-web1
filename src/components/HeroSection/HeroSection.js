import React from 'react'
import Button from '../Button/Button'
import './HeroSection.css'
import {FaPlayCircle} from 'react-icons/fa'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' loop muted autoPlay />
      <h1>ADVENTURE AWAITS</h1>
      <p>WHAT ARE YOU WAITING FOR</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH NOW <FaPlayCircle className='fa-playcircle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
