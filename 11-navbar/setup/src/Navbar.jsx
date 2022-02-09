import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

import logo from './logo.svg'


/**NavBar version 4 - Features:
 * 
 *  --->Building 'simple toggle' feature
 *  ---> Building showLinks state to create the toggle
 *  ---> creating short circuit condition to render the 
 *       links onClick of nav-toggle button
 *  
 */

const Navbar = () => {
  const [ showLinks, setShowLinks ] = useState(false)
  return (
    <>
    {/**<h4>navbar</h4> */}
    <nav>
      <div className='nav-center'>
          <div className='nav-header'>
              <img src={logo} alt='logo'/>
              {/**issue with the FaBar style 'nav-toggle'*/}
              <button className='' onClick={() => setShowLinks(!showLinks)}>
                <FaBars />
              </button>
          </div>
          {showLinks && 
          <div 
          /**i conditionally render styes, to get a transition, that
           * get me better user experience than only mounting component*/
            className={`${showLinks ? 
           'links-container show-container' : 'links-container'}`}>
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
          }
          
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