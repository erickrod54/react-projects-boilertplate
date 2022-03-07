import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 1 - NavBar Component - Features:
 * 
 *          -->Building the structure for the NavBar component
 *          -->Importing 'useGlobalContext', bringing three functions
 *            -only setting one, this version will serve as structure-
 * 
 *          -->Styles appplied: -->'nav' -for NavBar Component-
 * 
 *                              -->'nav-center' -to center 
 *                                 'nav-header' and 'nav-links'-
 * 
 *                              -->'nav-header'-for the logo 
 *                                  image and the '<FaBars>' to 
 *                                  dispaly the NavBar Component 
 *                                  in smaller screens-
 *                              
 *                              -->'nav-links' -the names in the list
 *                                  must match with reference in data js-
 */

const Navbar = () => {
  /**here i destructure the three functions 
   * 'openSidebar', 'openSubmenu', 'closeSubmenu' */
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
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
            <button className='link-btn'>products</button>
          </li>
          <li>
            <button className='link-btn'>developers</button>
          </li>
          <li>
            <button className='link-btn'>company</button>
          </li>  
        </ul>
      </div>  
      <button className='btn signin-btn'>Sign in</button>
    </nav> 
  
  </>
  
  )
}

export default Navbar
