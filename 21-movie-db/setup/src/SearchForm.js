import React from 'react'
import { useGlobalContext } from './context'

/**Movie-db app version 2 - 'SearchForm' Component - Features: 
 * 
 *      --> Destructuring query, setQuery, and error 
 *          on 'useGlobalContext' hook.
 * 
 *      --> Building a Form for the search feature.
 * 
 *      --> Setting and render the error from the API.
 * 
 * 
 * Note: Now being doing this i can use these values provided
 * everywhere where i want in the app
 * 
 * in order to the result being display dinamicly as the user
 * type in this input remember is very important that the 
 * 'query' value have been set up as dependency array.
 * */
const SearchForm = () => {

  /**Here i destructure 'query', 'setQuery', 'error' */
  const { query, setQuery, error } = useGlobalContext();

  return(
    <>
      {/**here i build the search form and prevent 
       * default behavior, to convert in a controlled input*/}
      <form 
        className='search-form' 
        onSubmit={(e) =>  e.preventDefault()}>
          <h2>search movies</h2>
          <input 
            type='text' 
            className='form-input' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
            />
            {/**above i setQuery as the value typed by the user */}
        </form>
        {error.show && <div className='error'>{error.msg}</div>}
    </>
  )
}

export default SearchForm
