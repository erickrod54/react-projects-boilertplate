import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 1 - SideBar Component - Features:
 * 
 *          -->Building the basic structure of 'SideBar' 
 *             Component.
 * 
 *          -->Getting the state 'isSidebarOpen' and the 
 *            function 'closeSidebar'.
 *
 * ---------these next steps of mapping i use 'index' because 
 * ---------im mapping over a list of elements-------------
 *  
 *          -->Mapping the 'sublinks' to get the pages
 *            -first level deep of the data-.
 * 
 *          -->Mapping the 'links' to get the 
 *            '{ url, icon, label }' 
 *            -Second level deep of the data- .
 * 
 * 
 * Note: Each 'page' has link with a subset of 'sublinks',
 * the state 'isSidebarOpen' is set as 'true' in context js
 * file, and the <FaBars> triggers 'openSidebar' from NavBar
 * Component
 */

const Sidebar = () => {
  /**the state and the function */
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
  <>
  {/**<h2>sidebar component</h2> */}
    <aside 
      /**here i use the state to toggle the class and show 'SideBar' */
      className={`${isSidebarOpen ? 'sidebar-wrapper show' 
      : 'sidebar-wrapper'}`}>
        <div className='sidebar'>
          {/**the button to close the SideBar */}
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className='sidebar-links'>
            {/**Mapping First level of data to get 'page' */}
            {sublinks.map((item, index) => {
              const { links, page } = item;
              return(
                <article key={index}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {/**Mapping Second level of data to get '{ url, icon, label }' */}
                    {links.map((link, index) =>{
                      const { url, icon, label } = link;
                      return(
                        <a key={index} href={url}>
                          {icon} 
                          {label}
                        </a>
                      )
                    })}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
    </aside>
  </> 
  )
}

export default Sidebar
