import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

/**Movie-db app version 1 - 'App' js file - Features: 
 * 
 *      -->Building 'Routing' feature
 * 
 *      -->Building Route for 'Home' where
 *         all the movies will be located.
 * 
 *      -->Building a 'children' Route for 
 *        a 'Movie' -single movie- Component
 * 
 * Note: This Routing feature is based on 'react-router-dom'
 * version 5 - later i'll update to version 6
 * */

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/movies/:id' children={<Movie />}/>
      </Switch>
    </>
  )
}

export default App
