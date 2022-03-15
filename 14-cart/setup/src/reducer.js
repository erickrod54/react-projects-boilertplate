/**Cart app version 5 - reducer js - Features:
 *            ---> Building 'increase' feature
 *            ---> Building 'decrease' feature  
 *                       
 * 
 * Note: the action was implemented in context js, is going to be
 * use by CartItem Component, and is build here reducer js */

const reducer = (state, action) => {

    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[] }
    }
    
    if (action.type === 'REMOVE') {
        return {
            ...state,
             cart:state.cart.filter((cartItem) => cartItem.id !== 
             action.payload )}
    }

    /**here i build increase feature */
    if (action.type === 'INCREASE') {
        /**first i set the return (line 37, line 43):
         *  
         *  >> let tempCart = []
         *  >> return { ...state: temCart}
         * 
         * , and then build the map -so be easy to follow on-
         */
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        });
        return {...state, cart: tempCart} 
    }
    /**here i build decrease feature -is a copy of increase -*/
    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                            /**instead of adding, decrease 1 */
                return {...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
            /**after decrese i filter, when 'amount' is not
             * equal to 0, i'll take off the cartItem returning
             * the 'tempCart' -this feature is alike 'remove'-*/
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: tempCart} 
    }
    return state
}

export default reducer;