import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 2 - SubMenu component - Features:
 * 
 *          -->Importing 'useGlobalContext' and using 
 *             'isSubmenuOpen' to display a style 
 *             'submenu show' or 'submenu'  
 * 
 * Note: from this version forward i will tackle the NavBar
 * Modal
 */

const Submenu = () => {
  /**here i destructure 'isSubmenuOpen' */
  const { isSubmenuOpen } = useGlobalContext()
  return (
  <>
  {/**<h2>submenu component</h2> */}
  
  {/** here is the Submenu Component*/}
    <aside className={`${isSubmenuOpen ? 
      'submenu show' : 'submenu'}`}>
        submenu  
      </aside>
  </>
  )
}

export default Submenu
