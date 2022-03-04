import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**
 * SideBar-Modal app version 3 - Home Component - Features:
 * 
 *          ---->Implementation of custom hook for 
 *                testing accesing 'hello world' 
 *                -this implementation makes code 
 *                           clean-
 * 
 * Notes: instead of importing --> AppContext
 *                             --> useContext
 * 
 * i import the custom hook 'useGlobalContext' and i invoke it
 * - the word 'use' before the name of the custom hook is
 * - mandatory
 * */

const Home = () => {
  const data = useGlobalContext()
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
