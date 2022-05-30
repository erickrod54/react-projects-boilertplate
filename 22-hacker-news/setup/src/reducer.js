import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

/**Hacker-news app version 2 - 'reducer' js file - Features: 
 * 
 *      --> Building 'SET_STORIES' action.
 * 
 * Note: The state is spreaded in order to get the data made
 * previously in the context js where i triggered the action
 * SET_STORIES, and here i defines the values as the payload
 * prop, as previously did in the context js
 * 
 * to verify that the i got the data correctly i'll check on:
 * 
 *  JavaConsole > Components > props from the Context>provider.
 * */

/**i pass the current state, and the action before dispatching */
const reducer = (state, action) => {

 
  switch(action.type){
   
     case SET_LOADING:
     
      return { ...state, isLoading:true}

      /**here i build 'SET_STORIES' action*/
      case SET_STORIES:
      /**i return the state
       * setloading to false and defining hits and nbPages props
       * values */  
      return { ...state, 
                  isLoading:false, 
                  hits: action.payload.hits,
                  nbPages: action.payload.nbPages}
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
    
}
export default reducer
