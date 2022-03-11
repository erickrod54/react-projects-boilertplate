import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 3 - SubMenu component - Features:
 * 
 *          -->Destructuring and getting the 'location' from 
 *            'context' js
 *          -->Building an 'useEffect' to trigger deppending 
 *             on the 'location'
 * 
 * Note: after this implementation i should see the submenu
 * modal moving dynamicly when the mouseOnOver any page 
 * button
 */

const Submenu = () => {
  /**here i destructure 'isSubmenuOpen' */
  const { isSubmenuOpen, location } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    /**here i create submenu to keep the current 
     * value of the container
     */
    const submenu = container.current;
    /**then i destructure center and bottom on location */
    const { center, bottom } = location;
    /**here i set insline style for center and bottom */
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return (
  <>
  {/**<h2>submenu component</h2> */}
  
  {/** here is the Submenu Component*/}
    <aside className={`${isSubmenuOpen ? 
      'submenu show' : 'submenu'}`} ref={container}>
        submenu  
      </aside>
  </>
  )
}

export default Submenu
