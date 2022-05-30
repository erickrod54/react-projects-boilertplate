import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

/**Hacker-news app version 1 - 'App' js file - Features: 
 * 
 *      -->Importing and Placing 'SearchForm', 'Stories' and
 *         'Buttons' Components.
 * 
 * Note: 
 * 
 * api reference:
 * 
 *    https://hn.algolia.com/api
 * 
 * API end-points: 
 * 
 *  http://hn.algolia.com/api/v1/search?query=
 * 
 * to test it:
 * 
 * http://hn.algolia.com/api/v1/search?query=svelte
 * 
 * as example for pagination:
 * 
 * http://hn.algolia.com/api/v1/search?query=svelte&page=4
 * 
 * */

function App() {
  return(
    <>
      <SearchForm />
      <Stories />
      <Buttons />
    </>
  )
}

export default App
