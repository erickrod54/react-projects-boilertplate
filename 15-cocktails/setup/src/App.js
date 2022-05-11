import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

/**Cocktails app version 7 - 'App' js file - Featrues:
 * 
 *      -->Refactoring to react-router version 6
 * 
 * Note: This naviagation is made using now is using 
 * react-router version 6
 */

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/cocktail/:id' element={ <SingleCocktail />}/>
          <Route path='*' element={ <Error />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
