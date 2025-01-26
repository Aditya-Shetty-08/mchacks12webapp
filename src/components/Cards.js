import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>General Information</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='In emergencies, every second counts. Our platform helps you make 
              quick, informed decisions by providing real-time hospital room availability and wait times near you—ensuring you get the care you need, faster.'
              label='Fast-Paced'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Save valuable time by avoiding unnecessary waits. Check real-time hospital room availability to choose the right hospital and get the care you need without delay.'
              label='Time Saving'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='The best doctors dedicated to providing exceptional care for patients'
              label='Caring'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Secure your care in advance with the option to book a hospital bed, ensuring timely treatment when you need it most.'
              label='Efficient'
              path='/BookRoom.js'
            /> 
            <CardItem
              src='/images/img-8.jpg'
              text='"Reach out to our hospital helpline anytime—available 24/7 to assist you.'
              label='Reliability'
              path='/contactus'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;