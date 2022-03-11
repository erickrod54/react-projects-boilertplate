import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

/**Stripe-submenu app version 4 - SubMenu component - Features:
 * 
 *          -->Destructuring the page value from find mehtod on 
 *             context js, and the links i'll fill it here in 
 *             Submenu Component.
 * 
 *          -->Mapping the 'sublinks' depending on the page.
 * 
 *          -->Using the useEffect to change dinamycly the 
 *            width of the 'Submenu' depending on the number  
 *            of 'sublinks'.
 * 
 */

const Submenu = () => {
  /**here i destructure 'page'*/
  const { isSubmenuOpen, location, page: { page, links }} = useGlobalContext()
  const container = useRef(null)
  const [ columns, setColumns ] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { center, bottom } = location;
    /**here i set insline style for center and bottom */
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])

  return (
  <>
  {/**<h2>submenu component</h2> */}
  
  {/** here is the Submenu Component*/}
    <aside className={`${isSubmenuOpen ? 
      'submenu show' : 'submenu'}`} ref={container}>
        <h4>{page}</h4>  
        {/**i'll focus on col-2 that will change the width*/}
        {/**refers to sublinks in data js */}
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) =>{
            const { label, icon, url } = link;
            return <a key={index} href={url}>
              {icon}
              {label}
            </a>
          })}  
        </div>
      </aside>
  </>
  )
}

export default Submenu
