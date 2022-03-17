import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 7  - context js - Features:
 *            ---> Implementing fetching data to get
 *                 cart data from the API:
 * 
 *                  -->Building action for 'LOADING'.
 *                  -->Building action for 'DISPLAY_ITEMS'.
 * 
 *            ---> Implementing a second useEffect
 *                 to make a call for the API.
 *  
 * Note: this implementation will substitute the 'data js'
 * 
 *  */

/**here i have the API url that contain the data */
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

/**here i build a fecthData for 'cart', 
i made use of promises to fecth data */
const fetchData = async () => {
  /**the action for the loading */
  dispatch({type:'LOADING'});

  /**the response to fecth the url */
  const response = await fetch(url);

  /**the cart with the response converted to json */
  const cart = response.json();

  /**the action to display the items */
  dispatch({type:'DISPLAY_ITEMS', payload:cart})

}

/**Here i build the useEffect to display the data */
useEffect(() => {
  fetchData()
},[])

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
