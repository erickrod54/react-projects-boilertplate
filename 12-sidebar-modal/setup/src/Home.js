import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**
 * SideBar-Modal app version 4 - Home Component - Features:
 * 
 *          --->importing 'useGlobalContext' curstom hook
 *          ---> destructuring 'openSidebar' and 'openModal'
 *               concerns to open the 'SideBar' and 'Modal'
 *               Component.
 * 
 * Note: refer to 'context js' to see the props -state and 
 * functionality that are being passed as value-
 * 
 * */

const Home = () => {
  /**here i destructuring to 'useGlobalContext'
   * -refers to context js, there i have the fucntions-*/
  const { openSidebar, openModal } = useGlobalContext()
  /**i can see it prompted in JavaConsole */
  console.log(openSidebar)
  return(
    <>
      {/**<h2>home component</h2> */}
      <main>
        <button 
            className='sidebar-toggle'
            /**here i trigger the 'openSidebar' function */ 
            onClick={openSidebar}>
          <FaBars />
        </button>
        <button 
          className='btn' 
          /**here i trigger the 'openModal' function */
          onClick={openModal}>show modal</button>
      </main>
    </>
  )
}

export default Home
