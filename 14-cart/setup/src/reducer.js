/**Cart app version 4 - reducer js - Features:
 *            ---> Building 'remove' feature
 *                       
 * 
 * Note: the action was implemented in context js, is going to be
 * use by CartItem Component, and is build here reducer js */

const reducer = (state, action) => {
    /**here if the 'action.type' matches with 'CLEAR_CART'
     * will return an empty array for 'cart'
     */
    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[] }
    }
    /**here if the 'action.type' matches with 'REMOVE' 
     * i'll filter the "state.cart" with elemements that
     * does not match with 'action.payload'
     * 
     * Note: 'action.payload' contains the id  
    */
    if (action.type === 'REMOVE') {
        return {
            ...state,
             cart:state.cart.filter((cartItem) => cartItem.id !== 
             action.payload )}
    }
    return state
}

export default reducer;