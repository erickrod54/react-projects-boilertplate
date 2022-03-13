import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

/**Cart app version 2 - App js file - Features:
 *            ---> Importing 'useGlobalContext' and destructuring
 *                 'loading' value in order to be use
 *                       
 * 
 * Note: this app has already set a boilerplate in order
 * to work */

function App() {
  /**here i destructure loading value */
  const { loading } = useGlobalContext()
  /**here is the conditional rendering to use 'loading' */
   if (loading) {
     return (
       <div className='loading'>
         <h1>Loading...</h1>
       </div>
     )
    }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
