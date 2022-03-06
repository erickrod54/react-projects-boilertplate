import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './context'

/**Stripe-submenu app version 1 - index js file - Features:
 * 
 *          -->Importing 'AppProvider' and wrapping the app 
 *             '<App>' to pass everything states and features
 *              to the childreen.
 * 
 */
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
