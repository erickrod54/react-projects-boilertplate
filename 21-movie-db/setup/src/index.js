import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'

/**Movie-db app version 1 - 'index' js file - Features: 
 * 
 *      -->Implementing 'BrowserRouter' 
 * 
 * Note: I use an alias of Route, wrapping with BrowserRouter
 * here has the same functionality than doing it at App js,
 * the difference will be that the code will look more 
 * cleaner and the Routing will come from the root directory
 * */

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
