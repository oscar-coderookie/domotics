import React, { useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import './HomePage.scss';
import { FaShoppingCart } from 'react-icons/fa';

const HomePage = () => {
  const parallax = useParallax<HTMLDivElement>({
    moveTo: [0, 720],
  });


  return (
    <div ref={parallax.ref} className="homepage-block" >
      <div  className="homepage__section1">

        <h1 className='homepage__title'>Tienda Online de componentes electromecánicos</h1>
        <FaShoppingCart className='homepage__icon' />
      </div>
      <div ref={parallax.ref} className="homepage__section2">
        <h2 className='homepage__title'>'Pide los recambios y todo lo que necesites para tu Hogar inteligente con nosotros, y te lo ponemos en la puerta de tu casa ;D'</h2>
        <img className='homepage__image' src="https://plus.unsplash.com/premium_photo-1682090260563-191f8160ca48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      </div>
      <div className="homepage__section3">
<img src="https://images.unsplash.com/photo-1631856954913-c751a44490ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default HomePage