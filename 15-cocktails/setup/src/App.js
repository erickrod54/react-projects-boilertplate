import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

/**Cocktails app version 1 - 'App' js file - Featrues:
 * 
 *      -->Setting the 'Route' for every Component in order
 *         to create a navigation.
 * 
 * Note: This naviagation is made using reatc-router version 5
 */

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/cocktail/:id'>
            <SingleCocktail />
          </Route>

          <Route path='*'>
            <Error />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App
