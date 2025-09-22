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
                    text="I'm Will, a senior at AHS. I was new to AI last year but managed to pick it up. I have high hopes and hope to help out the local community."
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/dylan.jpeg' 
                    label='Social Media Manager'
                    text="I'm Dylan, a senior at AHS. I mostly do graphic design in my free time but found the designs AI created interesting. It inspired me to join the club, and now I'm here to document club accomplishments and progress."
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
