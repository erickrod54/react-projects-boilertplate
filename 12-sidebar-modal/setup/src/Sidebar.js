import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

/**
 * SideBar-Modal app version 2 - SideBar Component - Features:
 *        
 *          ---->importing 'useGlobalContext' to get props
 *               and functionality.
 *          ---->getting the 'isSidebarOpen' state
 *          ---->getting the 'closeSidebar' fucntionality
 * 
 * Note: refer to 'context js' to see the props -state and 
 * functionality that are being passed as value-              
 *                         
 */

const Sidebar = () => {
  /**here i destructure what i need to useGlobalcontext*/
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
  <>
    {/**<h2>sidebar</h2> */}
    {/**here i use ternary operator and isSidebarOpen to toggle */}
    <aside 
      className={`${ isSidebarOpen ? 
                'sidebar show-sidebar' : 
                'sidebar'}`}>

      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
          <button
            /**here i invoke 'closeSidebar' to close the
             *  component */ 
            className='close-btn' 
            onClick={closeSidebar}>
            <FaTimes />
          </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          /**here i destructure what i need to render from 
           * links -checked in data js- */
          const { id, url, text, icon } = link
          return(
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          /**here i destructure what i need to render from 
           * social -checked in data js- */
          const { id, url, icon } = link
          return(
            <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  </>
  )
}

export default Sidebar
