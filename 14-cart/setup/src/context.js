import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

/**Cart app version 9  - context js - Features:
 *            ---> Implementing 'toggleAmount' for 'INCREASE'
 *                 and 'DECREASE' actions
 *  
 * Note: this implementation is related with unifying 'INCREASE'
 * and 'DECREASE' actions
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

/**here i build a fecthData for 'cart', 
i made use of promises to fecth data */
const fetchData = async () => {
  /**the action for the loading */
  dispatch({type:'LOADING'});

  /**the response to fecth the url */
  const response = await fetch(url);

  /**the cart with the response converted to json */
  const cart = await response.json();

  /**the action to display the items */
  dispatch({type:'DISPLAY_ITEMS', payload:cart})

}

/**this action will toggle between 'INCREASE' and 'DECREASE'
 * using as payload the 'type'*/
const toggleAmount = (id, type) => {
  dispatch({ type:'TOGGLE_AMOUNT', payload: {id, type}})
}

/**Here i build the useEffect to display the data */
useEffect(() => {
  fetchData()
},[])

useEffect(() => {
//i can test it this way: console.log('hello world')
  dispatch({  type:'GET_TOTALS' })
}, [state.cart])


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        toggleAmount
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
