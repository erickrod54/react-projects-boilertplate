import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version git  - context js - Features:
 *            ---> Implementing 'clearCart' action 
 *                       
 * 
 * Note: this action is going to be build on reducer js
 *  */

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

const clearCart = () => {
  dispatch({type:'CLEAR_CART'})
}
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
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
