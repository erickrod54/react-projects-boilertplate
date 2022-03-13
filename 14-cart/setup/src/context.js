import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 2 - context js - Features:
 *            ---> Cart issue solved by spreading the state
 *                       
 * 
 * Note: this app has already set a boilerplate in order
 * to work */

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

/**this state will be spread on the Provider */
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
        ...state,
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
