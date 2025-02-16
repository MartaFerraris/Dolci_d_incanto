import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/svg/logo-dolci-d-incanto.svg'
import call from '../../assets/svg/call.svg'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  // const toggleDropdown = (value) => {
  //   setIsVisible(value);
  // }

  return (
    <section className='nav-section'>
      <div className='nav-grid'>
        <div className='nav-logo'>
          <img className='nav-logo-img' src={logo} alt="Dolci d'Incanto" />
        </div>
        <div className='nav-link'>
          {/* Collegare successivamente le rispettive pages */}
          <div>Home</div>
          <div>Chi Siamo</div>
          {/* Dropdown */}
          <div className='nav-dropdown'>
            <div className='nav-dropdown-div'>Pasticceria</div>
            <div className='nav-dropdown-menu'>
              <div>Tradizionale</div>
              <div>Eventi speciali</div>
            </div>
          </div>
          <div>Gelateria</div>
          <div>Preventivo</div>
        </div>
        <div className='nav-contacts'>
          <div>
            <img src={call} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar