import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

/**Hacker-news app version 5 - 'reducer' js file - Features: 
 * 
 *      --> Building 'HANDLE_SEARCH' action.
 * 
 * Note: This action has been dispatched in context js and
 * provided to Story where is been set.
 * 
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
                  nbPages: action.payload.nbPages
                }
        case REMOVE_STORY:
        /**i return the whole state, but from hits i create
         * a new array with the 'objectID' that doesn't match
         * with my payload -'id' triggered by the user-
         */
        return {...state, hits:state.hits.
          filter((story) => story.objectID !== action.payload )
        }

        case HANDLE_SEARCH:
        /**here i build HANDLE_SEARCH action */  
          return { ...state, query: action.payload, page: 0 }
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
    
}
export default reducer
