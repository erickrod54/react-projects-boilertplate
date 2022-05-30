import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

/**Hacker-news app version 1 - 'reducer' js file - Features: 
 * 
 *      -->Building reducer action 'SET_LOADING'.
 * 
 * Note: In order to build the data flow for the reducer, i can
 * work either with 'if' statements or a 'switch' structure, this
 * for this case i'll use a switch. 
 * 
 * So this import for the actions variables must be when i'm
 * dispatching the action, this case 'context' and 'Stories'
 * but can be imported and use everywhere where i need it in
 * the app
 * */

/**i pass the current state, and the action before dispatching */
const reducer = (state, action) => {

  /**the condition for the switch 'action.type' */
  switch(action.type){
    /**the case for the first action 'SET_LOADING'*/
    case SET_LOADING:
      /**i spread the 'state', and 'isLoading' true*/
      return { ...state, isLoading:true}
    default:
      /**just in case i set an error if the API fails */
      throw new Error(`no matching "${action.type}" action type`)
  }
    
}
export default reducer
