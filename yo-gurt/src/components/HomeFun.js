import React from 'react'
import './HomeFun.css'
import CardItem from './CardItem'

function HomeFun() {

  return (
    <div className = 'home-fun-cards'>
        <h1>Meet our board</h1>
        <h2>Seeking new leaders</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/david.jpeg' 
                    label='Club President'
                    text="I'm David, a senior at AHS. I founded this club 2 years ago and watched it grow into the club it is today. This year I hope to solve more local issues in Massachusetts with AI solutions."
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/will.png' 
                    label='Vice President'
                    text='SEEKING VP'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/dylan.jpeg' 
                    label='Social Media Manager'
                    text='SEEKING SOCIAL MEDIA MANAGER'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
