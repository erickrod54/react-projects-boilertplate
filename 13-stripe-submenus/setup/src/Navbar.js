import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 5 - NavBar Component - Features:
 * 
 *          -->Building 'handleSubmenu' feature to close
 *             the submenu conditionally dependending 
 *             on the existence 'OnMouseOver' of
 *             'link-btn'
 * 
 * Note: "link-btn" the buttons class will be use
 * handle 'closeSubmenu' 
 */

const Navbar = () => {
  
  const { openSidebar, openSubmenu, closeSubmenu } = 
  useGlobalContext()
  
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    
    openSubmenu( page, { center, bottom })
  } 

  const handleSubmenu = (e) => {
    /**here i have to check and apply 'closeSubmenu'
     * to everything that does not contains 'link-btn'
     * -my buttons class-*/
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
  <>

    <nav className='nav' onMouseOver={handleSubmenu}>
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
