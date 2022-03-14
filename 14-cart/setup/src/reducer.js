/**Cart app version 3 - reducer js - Features:
 *            ---> Building 'clearCart' feature
 *                       
 * 
 * Note: the action was implemented in context js, is going to be
 * use by Cart Container, and is build here reducer js */

const reducer = (state, action) => {
    /**here if the 'action.type' matches with 'CLEAR_CART'
     * will return an empty array for 'cart'
     */
    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[] }
    }
    return state
}

export default reducer;