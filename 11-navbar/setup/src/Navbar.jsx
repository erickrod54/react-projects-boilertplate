import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

import logo from './logo.svg'
import SideBar from './SideBar'

/**NavBar version 3 - Features:
 * 
 *  --->Migrating 'SideBar' Component to 'App js' next to 
 *      'NavBar' Component
 *  --->Mapping 'social' media data from data js file
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
          <div className='links-container show-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link
                return(
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          
          <ul className='social-icons'>
            {social.map((media) =>{
              const { id, url, icon } = media;
              return(
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })}
          </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar