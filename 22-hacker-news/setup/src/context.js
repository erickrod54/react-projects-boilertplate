import React, { useContext, useEffect, useReducer } from 'react'
/**Hacker-news app version 1 - 'context' js file - Features: 
 * 
 *      --> Building state for the 'reducer' actions.
 * 
 *      --> Building 'initialState' with the first 
 *          action 'isLoading'.
 * 
 *      --> Building 'fetchStories' to made the request
 *          for the API data.
 * 
 *      --> Building the 'useEffect' to invoke 'fetchStories'. 
 * 
 *      --> Spreading as 'value' the reducer state.    
 * 
 * Note: the first action that is going to be spread is the
 * 'SET_LOADING'
 * 
 * So this import for the actions variables must be when i'm
 * dispatching the action, this case 'context' and 'Stories'
 * but can be imported and use everywhere where i need it in
 * the app
 * */

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading:true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  /**here i build the state for the reducer using
   * 'useReducer' hook*/
  const [ state, dispatch ] = useReducer(reducer, initialState)

  /**here i build 'fetchStories' request to request 
   * the 'SET_LOADING' action*/
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING})
  }

  /**here i use 'useEffect' hook to invoke it */
  useEffect(() => {
    fetchStories()
  },[])
  
  /**here in the provider i spread the reducer state as value */
  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
