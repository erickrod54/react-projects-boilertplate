import React, { useContext, useEffect, useReducer } from 'react'

/**Hacker-news app version 3 - 'context' js file - Features: 
 * 
 *      --> Building 'removeStory' feature in order
 *          to hit and remove a 'story' from the UI.
 *          
 * Note: this version has a test targeting the 'id' in order
 * to check that i am getting the 'id' of each story. is pending
 * after already verify the targeting 'id' test build the 
 * 'REMOVE_STORY' feature in reducer in the next version.
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

/**i build the state with the props that i'll use as 
 * values to build the url*/
const initialState = {
  isLoading:true,
  hits:[],
  query:'react',
  page:0,
  nbPages:0
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

    try {
      const response = await fetch(url)
      const data = await response.json()
      /**here i dispatch the action 'SET_STORIES' and 
       * i define the payload taking values from the API data*/
      dispatch({type:SET_STORIES, 
        payload:{hits:data.hits, nbPages:data.nbPages}})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  /**here i build 'removeStory' -targeting the 'id' test-*/
  const removeStory = (id) => {
    console.log(id)
  }

  /**here i use 'useEffect' hook to invoke it */
  useEffect(() => {
    /**here where i invoke i build it with the state props */
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  },[])

  
  /**here in the provider i spread the reducer state as value */
  return <AppContext.Provider value={{...state, removeStory}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
