import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  // {/* Collegare successivamente le rispettive pages */ }

  return (
    <section className='nav-section'>
      <div className='nav-grid'>
        <div className='nav-logo'>
          {/* <img className='nav-logo-img' src={logo} alt="Dolci d'Incanto" /> */}
        </div>
        <div className='nav-link'>
          <div>Home</div>
          {/* Dropdown "Chi siamo"*/}
          <div className='nav-dropdown'>
            <div className='nav-dropdown-div'>Chi Siamo</div>
            <div className='nav-dropdown-about-us'>
              <div>Dove siamo</div>
            </div>
          </div>
          {/* Dropdown "Pasticceria"*/}
          <div className='nav-dropdown'>
            <div className='nav-dropdown-div'>Pasticceria</div>
            <div className='nav-dropdown-past'>
              <div>Dolce</div>
              <div>Salati</div>
              <div>Eventi speciali</div>
            </div>
          </div>
          <div>Gelateria</div>
          <div>Preventivo</div>
        </div>
      </div>
    </section>
  )
}

export default Navbar