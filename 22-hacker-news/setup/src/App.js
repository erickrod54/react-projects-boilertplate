import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

/**Hacker-news app version 8 - 'App' js file - Features: 
 * 
 *      -->Placing Buttons Component up and down to stories.
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
      <Buttons />
      <Stories />
      <Buttons />
    </>
  )
}

export default App
