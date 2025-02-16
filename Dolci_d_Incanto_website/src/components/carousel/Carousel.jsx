import React from 'react'
import './Carousel.css'
import image1 from '../../assets/img/3.png'
import image2 from '../../assets/img/4.png'
import image3 from '../../assets/img/5.png'

const Carousel = () => {



  return (
    <section>
      <div className='carousel-box'>
        <div className='carousel'>
          <img className='carousel-img' src={image1} alt="dolci" />
          <img className='carousel-img' src={image2} alt="" />
          <img className='carousel-img' src={image3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Carousel