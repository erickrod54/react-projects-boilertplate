import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 2 - NavBar Component - Features:
 * 
 *          -->Building the MouseOver feature to display the
 *             'Submenu'
 *          -->Building a 'displaySubmenu' to display the 
 *             submenu -for the moment i'll make a test with
 *             'hello world message' onMouseOver- 
 *          -->Destructuring 'openSubmenu' to trigger it
 * 
 * ------------this feature is set in all the buttons that
 * ------------match with the pages
 * 
 * Note: in this version i make a test with 
 * a reference function 'displaySubmenu' to test 
 * 'onMouseOver = {displaySubmenu}'
 *  
 */

const Navbar = () => {
  /**here i destructure the three functions 
   * 'openSidebar', 'openSubmenu', 'closeSubmenu' */
  const { openSidebar, openSubmenu, closeSubmenu } = 
  useGlobalContext()
  
  /**this is the reference function and i trigger
   * the openSubmenu function -reference contex js-*/
  const displaySubmenu = (e) => {
    console.log('hello world');
    openSubmenu()
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
