import React from 'react'
import { useGlobalContext } from '../context'

/**Cocktails app version 1 - 'SearchForm' Component - Featrues:
 * 
 *        --> Destructuring 'setSearchTerm' value using 
 *          the provider 'useGlobalContext'.
 * 
 * Notes: every time that i'm typing is the 'setSearchTerm' 
 * functionality is going to be called
 */

const SearchForm = () => {
  /**here i destructure setSearchTerm */
  const { setSearchTerm, cocktails } = useGlobalContext();
  console.log(cocktails)
  
  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm
