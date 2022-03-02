import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

/**
 * SideBar-Modal app version 2 - Home Component - Features:
 * 
 *          ---->Testing accesing 'hello world' value from
 *               'context' js file to Home Component
 * 
 * Note: When i set a context, everytime i import it i can
 * access it from every component that i want -this case
 * for testing propuses accesing from Home Component- 
 * */

const Home = () => {
  const data = useContext(AppContext)
  /**i can see it prompted in JavaConsole */
  console.log(data)
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
