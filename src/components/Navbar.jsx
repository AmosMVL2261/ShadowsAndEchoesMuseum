import React, { useState } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='nav-menu'>
      {/* Logo section */}
      <div className='logo'>
        <h2>Shadows and Echoes Museum</h2>
      </div>

      {/* Desktop Menu */}
      <div className='desktop'>
        <ul className='nav-desktop'>
          <li className='menu-element'>Exhibitions and Events</li>
          <li className='menu-element'>Collections</li>
          <li className='menu-element'>Education</li>
          <li className='menu-element'>Visit</li>
          <li className='menu-element menu-element-f'>About</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className='mobile'>
        <img src={!toggle ? menu : close} alt="Menu button" className='menu-button' onClick={()=>setToggle((prev)=>!prev)}/>
        <div className={`${toggle ? 'block fade-in' : 'fade-out hidden'}`} >
          <ul className='nav-mobile'>
            <li className='menu-element'>Exhibitions and Events</li>
            <li className='menu-element'>Collections</li>
            <li className='menu-element'>Education</li>
            <li className='menu-element'>Visit</li>
            <li className='menu-element menu-element-f'>About</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar