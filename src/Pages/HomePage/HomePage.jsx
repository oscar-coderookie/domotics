import React from 'react';
import './HomePage.scss';
import slide1 from '../../img/slide1-home.jpg'

const HomePage = () => {
  return (
    <div className='homepage-block'>
      <div className="homepage__section">
        <img className='homepage__image' src={slide1} alt="slide1" />
      </div>

    </div>
  )
}

export default HomePage