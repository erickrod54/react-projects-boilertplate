import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 4  - context js - Features:
 *            ---> Implementing 'remove' action 
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
/**here is is 'remove' build and target 'id' to remove the
 * specific 'id' that i indicated */
const remove = (id) => {
  dispatch({type:'REMOVE', payload: id})
}
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove
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
