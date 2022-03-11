import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 4 - NavBar Component - Features:
 * 
 *          -->Fixing const 'page = e.target.textContext'
 *             that is wrong, is:
 *          
 *              const 'page = e.target.textContent'
 * 
 * Note: this is important, this is the 'page' text that i 
 * get from my buttons, and compare with my data to find
 * a match and get the links for that 'page'
 */

const Navbar = () => {
  
  const { openSidebar, openSubmenu, closeSubmenu } = 
  useGlobalContext()
  
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    /**this tempBtn give me the exactly position of the button
     * on Over*/
    const tempBtn = e.target.getBoundingClientRect();
    /**now i get the center-this to place the 'Submenu'-
     * left and right value come from the object*/
    const center = (tempBtn.left + tempBtn.right) / 2
    /**then i get the bottom to place the Submenu 3 px under
     * the button*/
    const bottom = tempBtn.bottom - 3;
    /**i call openSubmenu and passing page, center and
     *  bottom */
    openSubmenu( page, { center, bottom })
  } 
  return (
  <>
    {/**<h2>navbar component</h2> */}
    {/**Here is the NavBar Component */}
    <nav className='nav'>
      {/**here i placed logo and Bars */}
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe'></img>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />  
          </button>  
        </div>
        {/**here i placed the links */}
        <ul className='nav-links'>
          <li>
            <button 
              className='link-btn' 
              onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button 
              className='link-btn' 
              onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button 
              className='link-btn' 
              onMouseOver={displaySubmenu}>company</button>
          </li>  
        </ul>
      </div>  
      <button 
        className='btn signin-btn' >Sign in</button>
    </nav> 
  
  </>
  
  )
}

export default Navbar
