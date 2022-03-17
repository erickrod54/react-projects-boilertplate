/**Cart app version 9- reducer js - Features:
 * 
 *            --->Refactoring 'DECREASE' and 'INCREASE'
 *                actions unifying code for both              
 *                       
 * 
 * Note: all the code to the previous feature was removed
 * */

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

    if (action.type === 'GET_TOTALS') {
        
        let { total, amount } = state.cart.reduce((cartTotal, cartItem)=> {
            const { price, amount } = cartItem
       
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;    
         
            cartTotal.amount += amount;
            //console.log(cartTotal)
            return cartTotal
        },{
            total:0,
            amount:0
        })
        total = parseFloat(total.toFixed(2))

           return { ...state, total, amount}
    }
  
    if (action.type === 'LOADING') {
       return {...state, loading: true}
    }

    if (action.type === 'DISPLAY_ITEMS') {
       return {...state, cart: action.payload, loading:false}
    }
    /**Building toggleAmount condition */
    if (action.type === 'TOGGLE_AMOUNT') {
        /**i build a tempCart as the previous implementation */
        let tempCart = state.cart.map((cartItem) => {
            /**'cartItem.id' match to 'action.payload.id'
             * ----data id--       -----user action------ */
            if (cartItem.id === action.payload.id) {
                /**then if macth, i toogle betwwen 'increment' 
                 * and 'decrease' */
                if (action.payload.type === 'inc') {
                    return {...cartItem, 
                               amount:cartItem.amount + 1 }
                }
                if (action.payload.type === 'dec') {
                    return {...cartItem, 
                               amount:cartItem.amount - 1 }
                }
            }
            return cartItem
        })
        .filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: tempCart}
    }
    throw new Error('no matching action type')
}

export default reducer;