import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

/**
 * SideBar-Modal app version 1 - Home Component - Features:
 *          ---->Structuring placing '<FaBars />' to toggle 
 *               the 'SideBar' Component  
 *          ---->Placing the button to show modal
 *          ---->Styling: 'sidebar-toggle' -for SideBar button-
 *               and 'btn' -to show modal-
 */

const Home = () => {
  return(
    <>
      {/**<h2>home component</h2> */}
      <main>
        <button className='sidebar-toggle'>
          <FaBars />
        </button>
        <button className='btn'>show modal</button>
      </main>
    </>
  )
}

export default Home
