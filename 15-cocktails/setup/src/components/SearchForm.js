import React from 'react'
import { useGlobalContext } from '../context'


/**Cocktails app version 5 - 'SearchForm' Component - Features:
 * 
 *        --> Building the 'SearchValue' feature to get render
 *            as result the values typed by the user.
 * 
 *        --> Implementing 'useEffect' to focus on the input
 *            when the app is mounting.
 * 
 * Notes: every time that i'm typing is the 'setSearchTerm' 
 * functionality is going to be called
 */

const SearchForm = () => {
  /**here i destructure setSearchTerm */
  const { setSearchTerm, cocktails } = useGlobalContext();
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
