import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <h1> EXPLORE THE FUTURE OF AI</h1>
            <p> Learn, build, and collaborate on real-world machine learning projects—no prior experience needed.</p>
        </div>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--filled'
            buttonSize='btn--large'
            to='https://docs.google.com/forms/d/e/1FAIpQLSeXoTRbhvNvsAfxWUihoT3GBH-37amXsnO7RAGjDSaVUAZFLw/viewform?usp=header'> Join Here→ </Button>
        </div>
    </div>
  )
}

export default Hero
