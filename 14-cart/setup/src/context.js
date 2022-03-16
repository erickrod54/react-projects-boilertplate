import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 6  - context js - Features:
 *            ---> Implementing 'GET_TOTALS' feature
 *                 to get the total of the amounts.    
 * 
 * Note: this action is going to be build on reducer js,
 * this 'totals' thanks to this 'useEffect' will be
 * show in the shopping bag on the Navbar
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

const increase = (id) => {
  dispatch({type:'INCREASE', payload: id})
}

/**useEffect make able to set as dependency 'state.cart'
 * to track the change on the car and build 'GET_TOTALS' :
 * 
 *  >> this 'totals' thanks to this 'useEffect' will be
 *  >> show in the shopping bag on the Navbar
 * */
useEffect(() => {
//i can test it this way: console.log('hello world')
  dispatch({type:'GET_TOTALS'})
}, [state.cart])

const decrease = (id) => {
  dispatch({type:'DECREASE', payload: id})
}
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
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
