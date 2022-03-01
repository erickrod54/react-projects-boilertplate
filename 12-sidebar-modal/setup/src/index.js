import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProvider } from './context'
import App from './App'

/**SideBar-Modal app version 2 - Index js file - Features:
 *      -->Wrapping the whole 'App' with <AppProvider>
 * 
 * Note: this after building the context and the provider in
 * context js file -make sure that always 'children' are 
 * included in the provider-
 */
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
