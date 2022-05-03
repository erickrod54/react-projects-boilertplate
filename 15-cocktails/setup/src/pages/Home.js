import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

/**Cocktails app version 1 - 'Home' page - Featrues:
 * 
 *      -->Importing and placing 'SearchForm'.
 * 
 *      -->Importing and placing 'CocktailsList'.
 * 
 * Note: These componnents are going to be rendered for 
 * the home page
 */
const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
