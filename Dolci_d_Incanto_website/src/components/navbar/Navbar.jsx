import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/svg/logo-dolci-d-incanto.svg'
import call from '../../assets/svg/call.svg'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  const dropdownVisible = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <section className='nav-section'>
      <div className='nav-grid'>
        <div className='nav-logo'>
          <img className='nav-logo-img' src={logo} alt="Dolci d'Incanto" />
        </div>
        <div className='nav-link'>
          {/* Collegare successivamente le rispettive pages */}
          <a href="#">Home</a>
          <a href="#">Chi Siamo</a>
          {/* dropdown */}
          <div className='nav-dropdown'>
            <p className='nav-dropdown-p' onClick={dropdownVisible}>Pasticceria</p>
            {isVisible && <div className='.nav-dropdown-a'>
            <a href="#">Tradizionale</a>
            <a href="#">Eventi speciali</a>
            </div>}
          </div>
          <a href="#">Gelateria</a>
          <a href="#">Preventivo</a>
        </div>
        <div className='nav-contacts'>
          <a href="#">
            <img src={call} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Navbar