import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 1 - context js - Features:
 *            --->Switching from 'useState' to 'useReducer'
 *                to start reducers implementations
 *            --->implementing "state" and 'dispatch' instead
 *                of state values.      
 * 
 * Note: this app has already set a boilerplate in order
 * to work - pending solve cart issue*/

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total:0,
  ammount:0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
