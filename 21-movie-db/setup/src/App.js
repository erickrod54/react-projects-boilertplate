import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

/**Movie-db app version 4 - 'App' js file - Features: 
 * 
 *      -->Updating Routing to version 6.
 * 
 * Note: This Routing feature is based on 'react-router-dom'
 * version 5 - later i'll update to version 6
 * */

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<Movie />}/>
      </Routes>
    </>
  )
}

export default App
