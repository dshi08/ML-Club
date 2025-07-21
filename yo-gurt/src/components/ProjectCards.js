import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function ProjectCards() {
  return (
    <div className = 'cards'>
        <h1>Club Portfolio of Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards
