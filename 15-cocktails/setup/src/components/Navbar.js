import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

/**Cocktails app version 1 - 'NavBar' Component - Featrues:
 * 
 *      -->Setting the 'logo' as a Link to take back 'Home'.
 * 
 *      -->Placing links to navigate to 'home' and 'about'.
 * 
 * Note: These componnents are going to be rendered for 
 * the home page
 */

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo'/>
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
      </ul>
     
    </nav>
  )
}

export default Navbar
