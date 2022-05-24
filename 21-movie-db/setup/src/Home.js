import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'

/**Movie-db app version 1 - 'Home' Component - Features: 
 * 
 *      -->Importing and Placing 'Form' Component.
 * 
 *      -->Importing and Placing 'Movies' Component.
 * 
 * Note: 'Form' Component will be for a search feature,
 * and 'Movies' Component will be to display all the movies. 
 * */

const Home = () => {
  return(
    <>
      <main>
        <Form />
        <Movies />
      </main>
    </>
  )
}

export default Home
