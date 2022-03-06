import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

/**Stripe-submenu app version 1 - App js file - Features:
 * 
 *          -->Mounting all the Components 
 */

function App() {
  
  return (
    <>
      {/**<h2>stripe submenus setup</h2> */}
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  )
}

export default App
