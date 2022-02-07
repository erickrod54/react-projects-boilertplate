import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import './SideBar'
import logo from './logo.svg'
import SideBar from './SideBar'

/**NavBar version 2 - Features:
 * 
 *  --->Finished Basic Structure
 *  --->Importing 'SideBar' component 
 *  
 */

const Navbar = () => {
  return (
    <>
    {/**<h4>navbar</h4> */}
    <nav>
      <div className='nav-center'>
          <div className='nav-header'>
              <img src={logo} alt='logo'/>
              {/**issue with the FaBar style 'nav-toggle'*/}
              <button className=''>
                <FaBars />
              </button>
          </div>
          <SideBar />
          <ul className='social-icons'>
            <li>
              <a href='https://twitter.com'>
                <FaTwitter />
              </a> 
            </li>
            <li>
              <a href='https://twitter.com'>
                <FaTwitter />
              </a> 
            </li>
            <li>
              <a href='https://twitter.com'>
                <FaTwitter />
              </a> 
            </li>
          </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar