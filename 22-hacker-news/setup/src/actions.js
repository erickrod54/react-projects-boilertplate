/**Hacker-news app version 1 - 'actions' js file - Features: 
 * 
 *      -->Building actions.
 * 
 * Note: This implementation is very important because building
 * actions like are here i can avoid silly typo errors, and get
 * focus on functionallity. 
 * 
 * So this import for the actions variables must be when i'm
 * dispatching the action, this case 'context' and 'Stories'
 * but can be imported and use everywhere where i need it in
 * the app
 * */

export const SET_LOADING = 'SET_LOADING'
export const SET_STORIES = 'SET_STORIES'
export const REMOVE_STORY = 'REMOVE_STORY'
export const HANDLE_PAGE = 'HANDLE_PAGE'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'
