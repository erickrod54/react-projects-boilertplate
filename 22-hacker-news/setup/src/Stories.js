import React from 'react'
import { useGlobalContext } from './context'
/**Hacker-news app version 1 - 'Stories' js file - Features: 
 * 
 *      --> Destructuring 'isLoading' prop using the
 *          'useGlobalContext'.
 *  
 *      --> Building a conditional rendering displaying
 *          a div with the className 'loading'.
 * 
 * Note: for the moment i'll only display the loading for the
 * Stories component.
 * 
 * */

const Stories = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'/>
  }
  return <h2>stories component</h2>
}

export default Stories
