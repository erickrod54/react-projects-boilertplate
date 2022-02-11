import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

import logo from './logo.svg'


/**NavBar version 5 - Features:
 * 
 *  --->useRef ( show-container style class 
 *     is hard coded it means that the container 
 *     size for each link is static, but in order
 *     to set it dynamicly depending on the links 
 *     that i have, i apply useEffect over the 
 *     height of the link and this can modify my 
 *     container height as well)
 * 
 *  --->conditional 'style class' over short circuit
 *     condition to create the toogle
 * 
 *  
 */

const Navbar = () => {
  const [ showLinks, setShowLinks ] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    /**'getBoundingClientRect()' shows an object of the browser*/
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight} px` 
    }else{
      linksContainerRef.current.style.height = '0 px'
    }
    
  }, [showLinks]);


  return (
    <nav>
      <div className='nav-center'>
          <div className='nav-header'>
              <img src={logo} alt='logo'/>
              {/**issue with the FaBar style 'nav-toggle'*/}
              <button 
                  className='nav-toggle' 
                  onClick={toggleLinks}
                  >
                <FaBars />
              </button>
          </div>
           
          <div 
            /**this ternary operator creates the toggle
             * --substites short-circuit condition---*/
            className={`${showLinks ? 
              'links-container show-container': 'links-container'}`} 
            ref={linksContainerRef} >

            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link
                return(
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {social.map((socialIcon) =>{
              const { id, url, icon } = socialIcon;
              return(
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
      </div>
    </nav>
  )
}

export default Navbar