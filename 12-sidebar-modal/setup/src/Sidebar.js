import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

/**
 * SideBar-Modal app version 1 - SideBar Component - Features:
 *          ----> Mapping 'links' for Sidebar Component
 *          ----> Mapping 'social' for social links 
 *                  -for Sidebar Component-
 * 
 *          ----> Styling the 'SideBar' Component component:
 * 
 *                -->`sidebar show-sidebar` -the second style-
 *                    to toggle the SideBar Component
 * 
 *                -->'sidebar-header' that goes with a logo
 *  
 *                -->'links' -style for every link-
 * 
 *                -->'social' -style for every social media 
 *                            link-
 */

const Sidebar = () => {
  return (
  <>
    {/**<h2>sidebar</h2> */}
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
          <button className='close-btn'>
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
