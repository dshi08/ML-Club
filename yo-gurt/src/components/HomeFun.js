import React from 'react'
import './HomeFun.css'
import CardItem from './CardItem'

function HomeFun() {

  return (
    <div className = 'home-fun-cards'>
        <h1>Have Fun,</h1>
        <h2>Make Friends!</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='/images/banana.png' 
                    label='Have'
                    text='Machine 🍌🍌🍌'
                    path='https://www.youtube.com/watch?v=xPaFQ8ogvto'
                    />
                    <CardItem
                    src='/images/cubesat.png' 
                    label='Fun!'
                    text='Team working on BWSI Build a CubeSat Challenge'
                    path='https://drive.google.com/drive/folders/1Oa1vfpYRJ8C8R1q91U7ICeeJE4_YPFjU'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default HomeFun;
