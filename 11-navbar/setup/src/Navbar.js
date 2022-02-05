import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

/**NavBar version 1 - Features:
 * 
 *  --->Building 'JSX'
 *  --->Setting Styling to the App 
 */

const Navbar = () => {
  return (
    <>
    {/**<h4>navbar</h4> */}
    <nav>
      <div className='nav-header'>
          <img src={logo} alt='logo'/>
          {/**issue with the FaBar style */}
          <button className=''>
            <FaBars />
          </button>
      </div>
      <div 
        className='links-container show-container'>
      </div>
      <ul className='social-icons'></ul>
    </nav>
    </>
  )
}

export default Navbar
