import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

/**Stripe-submenu app version 1 - Hero Component - Features:
 * 
 *          -->Testing the access to the two states, and four
 *             functions
 * 
 * Notes: have access to four functions closeSidebar, 
 * closeSubmenu, openSidebar, openSubmenu, and 
 * two states isSubmenuOpen, isSidebarOpen 
 */

const Hero = () => {
  const data = useGlobalContext();
  console.log(data)
  return <h2>hero component</h2>
}

export default Hero