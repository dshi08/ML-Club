import React from 'react'
import './ProjectCards.css'
import CardItem from './CardItem'
import { Button } from './Button'

function ProjectCards() {

  return (
    <div className = 'cards'>
        <h1>Club Portfolio of Projects</h1>
        <div className="cards__button-wrapper">
            <Button
            buttonStyle='btn--empty'
            buttonSize='btn--large'
            to='https://docs.google.com/forms/d/e/1FAIpQLSd3sV3TQAq63Zwnk-mq3sWgY-2DdM6ex88TIGNj36Q7xlJpbA/viewform'>
                Request Upload →
            </Button>
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    <CardItem
                    src='/images/ai-gen-hero.webp' //tester
                    label='test'
                    text='Tester card that does this that and this and stufasd sdadsdas dsadsadsdasf. Tester card that does this that and this and stufasd sdadsdas dsadsadsdasf.'
                    path='https://shipwrecked.hackclub.com/bay'
                    />
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards;
