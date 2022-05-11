import React from 'react'
import { useGlobalContext } from '../context'


/**Cocktails app version 7 - 'SearchForm' Component - Features:
 * 
 *        --> Removing 'cocktails' prop
 * 
 * Notes: every time that i'm typing is the 'setSearchTerm' 
 * functionality is going to be called
 * 
 * cocktails prop is not use in this Component.
 */

const SearchForm = () => {
  /**here i destructure setSearchTerm */
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  /**here i focus in the input on app mounting */
  React.useEffect(() => {
    searchValue.current.focus()
  })

  return (
    <section className='section search'>
      <form action='' className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input 
            type='text' 
            id='name' 
            ref={searchValue}
            onChange={searchCocktail}
            />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
